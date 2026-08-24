import os
import re
import sys
from pathlib import Path

import requests


# ---------------------------------------------------------
# Configuration
# ---------------------------------------------------------

TRIGGER_LABEL = "generate-release-notes"
OUTPUT_FILE = "RELEASE_NOTES.md"

# Matches Jira keys such as:
# SCRUM-1
# PROJ-123
# ABC-999
JIRA_ISSUE_REGEX = r"\b[A-Z][A-Z0-9]+-\d+\b"


# ---------------------------------------------------------
# Environment variables
# ---------------------------------------------------------

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_REPOSITORY = os.getenv("GITHUB_REPOSITORY")
PR_NUMBER = os.getenv("PR_NUMBER")

JIRA_BASE_URL = os.getenv("JIRA_BASE_URL")
JIRA_EMAIL = os.getenv("JIRA_EMAIL")
JIRA_API_TOKEN = os.getenv("JIRA_API_TOKEN")


# ---------------------------------------------------------
# Validate required environment variables
# ---------------------------------------------------------

required_variables = {
    "GITHUB_TOKEN": GITHUB_TOKEN,
    "GITHUB_REPOSITORY": GITHUB_REPOSITORY,
    "PR_NUMBER": PR_NUMBER,
    "JIRA_BASE_URL": JIRA_BASE_URL,
    "JIRA_EMAIL": JIRA_EMAIL,
    "JIRA_API_TOKEN": JIRA_API_TOKEN,
}

missing_variables = [
    name
    for name, value in required_variables.items()
    if not value
]

if missing_variables:
    print(
        "Missing required environment variables: "
        + ", ".join(missing_variables)
    )
    sys.exit(1)


# ---------------------------------------------------------
# GitHub API
# ---------------------------------------------------------

github_headers = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}


def get_pull_request():
    """
    Get the Pull Request that triggered the workflow.
    """

    url = (
        f"https://api.github.com/repos/"
        f"{GITHUB_REPOSITORY}/pulls/{PR_NUMBER}"
    )

    response = requests.get(
        url,
        headers=github_headers,
        timeout=30,
    )

    response.raise_for_status()

    return response.json()


# ---------------------------------------------------------
# Check PR label
# ---------------------------------------------------------

def has_trigger_label(pull_request):
    """
    Check whether the PR contains the required label.
    """

    labels = pull_request.get("labels", [])

    label_names = [
        label["name"]
        for label in labels
    ]

    print(f"PR labels: {label_names}")

    return TRIGGER_LABEL in label_names


# ---------------------------------------------------------
# Extract Jira issue keys
# ---------------------------------------------------------

def extract_jira_keys(pull_request):
    """
    Search the PR title, description and branch name
    for Jira issue keys.
    """

    title = pull_request.get("title", "")
    body = pull_request.get("body") or ""
    branch_name = pull_request["head"]["ref"]

    text = f"""
    {title}
    {body}
    {branch_name}
    """

    jira_keys = re.findall(
        JIRA_ISSUE_REGEX,
        text.upper(),
    )

    # Remove duplicates while preserving order
    unique_keys = list(dict.fromkeys(jira_keys))

    return unique_keys


# ---------------------------------------------------------
# Jira API
# ---------------------------------------------------------

def get_jira_issue(issue_key):
    """
    Get Jira issue information.
    """

    url = (
        f"{JIRA_BASE_URL.rstrip('/')}"
        f"/rest/api/3/issue/{issue_key}"
    )

    params = {
        "fields": "summary,issuetype,status,priority,reporter"
    }

    response = requests.get(
        url,
        params=params,
        auth=(JIRA_EMAIL, JIRA_API_TOKEN),
        headers={
            "Accept": "application/json"
        },
        timeout=30,
    )

    if response.status_code == 404:
        print(
            f"Jira issue {issue_key} was not found."
        )
        return None

    response.raise_for_status()

    return response.json()


# ---------------------------------------------------------
# Format Jira information
# ---------------------------------------------------------

def format_jira_block(issue):
    """
    Convert Jira issue information into Markdown.
    """

    fields = issue["fields"]

    summary = fields.get(
        "summary",
        "No summary"
    )

    issue_type = fields.get("issuetype")

    issue_type_name = (
        issue_type.get("name")
        if issue_type
        else "Unknown"
    )

    status = fields.get("status")

    status_name = (
        status.get("name")
        if status
        else "Unknown"
    )

    priority = fields.get("priority")

    priority_name = (
        priority.get("name")
        if priority
        else "Unknown"
    )

    reporter = fields.get("reporter")

    if reporter:
        reporter_name = (
            reporter.get("displayName")
            or reporter.get("emailAddress")
            or "Unknown"
        )
    else:
        reporter_name = "Unknown"

    issue_key = issue["key"]

    return f"""### {issue_key} — {summary}

- **Type:** {issue_type_name}
- **Status:** {status_name}
- **Priority:** {priority_name}
- **Reporter:** {reporter_name}

"""


# ---------------------------------------------------------
# Update RELEASE_NOTES.md
# ---------------------------------------------------------

def update_release_notes(
    pull_request,
    jira_issues
):
    """
    Add the new release note to the top
    of RELEASE_NOTES.md.
    """

    file_path = Path(OUTPUT_FILE)

    if file_path.exists():
        existing_content = file_path.read_text(
            encoding="utf-8"
        )
    else:
        existing_content = "# Release Notes\n\n"

    pr_number = pull_request["number"]
    pr_title = pull_request["title"]

    merged_by = (
        pull_request.get(
            "merged_by",
            {}
        ).get("login")
        if pull_request.get("merged_by")
        else "Unknown"
    )

    release_entry = f"""## Pull Request #{pr_number} — {pr_title}

- **Merged by:** {merged_by}

"""

    for issue in jira_issues:
        release_entry += format_jira_block(issue)

    release_entry += "\n"

    # Insert the new entry after "# Release Notes"
    header = "# Release Notes"

    if header in existing_content:

        remaining_content = (
            existing_content[len(header):]
            .lstrip()
        )

        new_content = (
            f"{header}\n\n"
            f"{release_entry}"
            f"{remaining_content}"
        )

    else:

        new_content = (
            f"{header}\n\n"
            f"{release_entry}"
            f"{existing_content}"
        )

    file_path.write_text(
        new_content,
        encoding="utf-8",
    )

    print(
        f"{OUTPUT_FILE} updated successfully."
    )


# ---------------------------------------------------------
# Main
# ---------------------------------------------------------

def main():

    print(
        "Starting release notes generation..."
    )

    # 1. Get the Pull Request
    pull_request = get_pull_request()

    print(
        f"PR #{pull_request['number']}: "
        f"{pull_request['title']}"
    )

    # 2. Make sure the PR was merged
    if not pull_request.get("merged"):
        print(
            "Pull Request was not merged. "
            "Nothing to do."
        )
        return

    # 3. Make sure it was merged into main
    base_branch = pull_request["base"]["ref"]

    if base_branch != "master":
        print(
            f"PR was merged into '{base_branch}', "
            "not master. Nothing to do."
        )
        return

    # 4. Check the trigger label
    if not has_trigger_label(pull_request):

        print(
            f"Label '{TRIGGER_LABEL}' not found."
        )

        print(
            "No release notes will be generated."
        )

        return

    # 5. Find Jira keys
    jira_keys = extract_jira_keys(
        pull_request
    )

    print(
        f"Jira keys found: {jira_keys}"
    )

    if not jira_keys:

        print(
            "No Jira issue keys found."
        )

        print(
            "No release notes will be generated."
        )

        return

    # 6. Get Jira information
    jira_issues = []

    for issue_key in jira_keys:

        print(
            f"Getting Jira issue: {issue_key}"
        )

        issue = get_jira_issue(
            issue_key
        )

        if issue:
            jira_issues.append(issue)

    if not jira_issues:

        print(
            "No Jira issues could be retrieved."
        )

        return

    # 7. Update RELEASE_NOTES.md
    update_release_notes(
        pull_request,
        jira_issues,
    )

    print(
        "Release notes generation completed."
    )


if __name__ == "__main__":
    main()