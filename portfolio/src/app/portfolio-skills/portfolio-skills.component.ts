import { Component, OnInit } from '@angular/core';
import { SkillsInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent implements OnInit {

  skills : Array<SkillsInfo> = [];

  constructor() { }

  ngOnInit(): void {
    this.skills.push({Category: "Languages", Name: "Typescript & C#", ActualSkill: ["Typescript", "C#", "JavaScript"]});
    this.skills.push({Category: "Frameworks", Name: "Angular & .NET", ActualSkill: ["Angular", ".NET Core"]});
    this.skills.push({Category: "Cloud & Devops", Name: "GCP & Azure", ActualSkill: ["GCP", "Azure", "CI/CD"]});
    this.skills.push({Category: "Databases", Name: "SQL & MongoDB", ActualSkill: ["SQL Server", "MongoDB"]});
    this.skills.push({Category: "Auth & API's", Name: "REST & OKTA", ActualSkill: ["REST API", "Okta SSO"]});
    this.skills.push({Category: "Libraries and Tools", Name: "primeNG and More", ActualSkill: ["PrimeNG", "Hangfire", "EF core"]});
  }

}
