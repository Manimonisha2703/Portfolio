import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit {

  projects : Array<ProjectInfo> = [];

  constructor() { }

  ngOnInit(): void {
    this.projects.push({
      Name: "GCP data filtering pipeline",
      Description: "Designed architecture for filtering datasets at source in Google Cloud, eliminating unnecessary scans across the entire data retrieval workflow.",
      Highlight: "↓ 40% cloud processing cost",
      Technologies: ["C#", ".Net Core", "SQL Server", "Angular"]
    });
    this.projects.push({
      Name: "Okta SSO integration",
      Description: "Retrofitted enterprise Single Sign-On into a legacy .NET Framework app — zero disruption to existing enterprise workflows.",
      Highlight: "Enabled seamless SSO for 1000+ users",
      Technologies: ["Okta", ".NET Framework", "C#", "JavaScript"]
    });
    this.projects.push({
      Name: "In-app PDF viewer",
      Description: "Full-featured document viewer with search, copy, highlight, download, and navigation — embedded natively inside the enterprise app.",
      Highlight: "↑ 20% user engagement",
      Technologies: ["TypeScript", "PDF.js", "GCP", "Angular"]
    });
    this.projects.push({
      Name: "ServiceNow API connector",
      Description: "RESTful connector to ServiceNow in C# / .NET enabling multi-source data ingestion and workbook creation for analytics teams.",
      Technologies: ["C#", ".NET", "REST API", "ServiceNow"]
    });
    this.projects.push({
      Name: "Multi-timezone scheduler",
      Description: "Cron-based maintenance scheduler with Hangfire, handling recurring tasks reliably across multiple time zones for a multi-tenant platform",
      Highlight: "↓ 30% maintenance overhead",
      Technologies: [".NET Core", "C#", "Hangfire"]
    });
    this.projects.push({
      Name: "AI product UI (solo build)",
      Description: "Independently built the complete frontend for an internal AI application — component library, multi-theme, scalable architecture.",
      Highlight: "↓ 50% development time for future features",
      Technologies: ["Angular", "TypeScript", "PrimeNG", "RxJS"]
    });
  }

}
