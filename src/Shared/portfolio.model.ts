export class GlimpsesInfo {
    value: string;
    description: string;
}

export class SkillsInfo {
    Category: string;
    Name: string;
    ActualSkill: string[];
}

export class ProjectInfo {
    Name: string;
    Description: string;
    Highlight?: string;
    Technologies: string[];
}

export class ExperienceInfo {
    Role: string;
    Company: string;
    Duration: string;
    WorkDescription : Array<string>;
    Technologies: Array<string>;
}
export class LoginInfo {
    UserName: string;
    Password: string;
}
export class LoginResponse {
    token: string;
}

export class AboutDetails {
    description: string;
    keywords: Array<string>
}