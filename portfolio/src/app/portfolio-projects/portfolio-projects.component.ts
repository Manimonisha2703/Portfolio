import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { ProjectInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit {

  projects : Array<ProjectInfo> = [];

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    // this.projects.push({
    //   name: "GCP data filtering pipeline",
    //   description: "Designed architecture for filtering datasets at source in Google Cloud, eliminating unnecessary scans across the entire data retrieval workflow.",
    //   highlight: "↓ 40% cloud processing cost",
    // });
    // this.projects.push({
    //   name: "Okta SSO integration",
    //   description: "Retrofitted enterprise Single Sign-On into a legacy .NET Framework app — zero disruption to existing enterprise workflows.",
    //   highlight: "Enabled seamless SSO for 1000+ users",
    // });
    // this.projects.push({
    //   name: "In-app PDF viewer",
    //   description: "Full-featured document viewer with search, copy, highlight, download, and navigation — embedded natively inside the enterprise app.",
    //   highlight: "↑ 20% user engagement",
    // });
    // this.projects.push({
    //   name: "ServiceNow API connector",
    //   description: "RESTful connector to ServiceNow in C# / .NET enabling multi-source data ingestion and workbook creation for analytics teams.",
    // });
    // this.projects.push({
    //   name: "Multi-timezone scheduler",
    //   description: "Cron-based maintenance scheduler with Hangfire, handling recurring tasks reliably across multiple time zones for a multi-tenant platform",
    //   highlight: "↓ 30% maintenance overhead",
    // });
    // this.projects.push({
    //   name: "AI product UI (solo build)",
    //   description: "Independently built the complete frontend for an internal AI application — component library, multi-theme, scalable architecture.",
    //   highlight: "↓ 50% development time for future features",
    // });

    this.getProjects();
  }

  getProjects() {
    this.portfolioAdminHttpService.getFeature().subscribe({
      next : (projects : Array<ProjectInfo>) => {
        projects.forEach(prj => {
          const tempPrj: ProjectInfo = {
            name : prj.name,
            description : prj.description,
            highlight : prj.highlight,
          }
          this.projects.push(tempPrj);
        })
      }
    })
  }
}
