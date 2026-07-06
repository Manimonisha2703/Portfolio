import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { ExperienceInfo, ProjectInfo, StackDetails } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-admin-actions',
  templateUrl: './portfolio-admin-actions.component.html',
  styleUrls: ['./portfolio-admin-actions.component.scss']
})
export class PortfolioAdminActionsComponent implements OnInit {

  glimpsesValue: string = '';
  glimpsesDescription: string = '';
  aboutValue: string = '';
  technology: Array<string> = [];
  currTechnology: string;
  stackType: string;
  stackHeading: string;
  description: Array<string> = [];
  workDescription :string;
  roleVal: string;
  durationVal: string;
  companyName: string;
  techDetails: string;
  techList: Array<string> = [];
  featureName: string;
  featureDescription: string;
  featureHighlight: string

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    
  }

  addGlimpses() {

    const glimpsesInfo = {
      value: this.glimpsesValue,
      description: this.glimpsesDescription
    }
    this.portfolioAdminHttpService.addGlimpses(glimpsesInfo).subscribe({
      next : () => {
        console.log('Glimpses added successfully');
      }
    }
    )
  }

  addAboutKeywords() {
    this.portfolioAdminHttpService.addAboutKeyword(this.aboutValue).subscribe({
      next : () => {
        console.log('About keyword added successfully');
      }
    }) 
  }

  addTechnology() {
    this.technology.push(this.currTechnology);
  }

  addStack() {
    const stackDetails: StackDetails = {
      stackType : this.stackType,
      stackHeading: this.stackHeading,
      stackList: this.technology
    }
    this.portfolioAdminHttpService.addStack(stackDetails).subscribe({
      next : () => {
        console.log('Stack added successfully');
      }
    })
    this.technology = [];
  }

  addDescription() {
    this.description.push(this.workDescription);
  }

  addTechUsed() {
    this.techList.push(this.techDetails);
  }

  addWorkExperience() {
    const currWorkExp: ExperienceInfo = {
      role : this.roleVal,
      company: this.companyName,
      duration: this.durationVal,
      workDescription: this.description,
      technologies: this.techList,
    }

    this.portfolioAdminHttpService.addExperience(currWorkExp).subscribe({
      next: () => {
        this.description = [];
        this.techList = [];
        console.log("Experience added successfully");
      }
    })
  }

  addFeature() {
    const currFeature: ProjectInfo = {
      name : this.featureName,
      description : this.featureDescription,
      highlight : this.featureHighlight
    }

    this.portfolioAdminHttpService.addFeature(currFeature).subscribe({
      next : () => {
        console.log("Feature added successfully.")
      }
    })
  }

  
}
