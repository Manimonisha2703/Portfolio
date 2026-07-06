import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { SkillsInfo, StackDetails } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent implements OnInit {

  skills : Array<StackDetails> = [];

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.getStack();
  }

  getStack(){
    this.portfolioAdminHttpService.getStack().subscribe({
      next : (stack: Array<StackDetails>) => {
        stack.forEach(element => {
          const tempStack = {
            stackType : element.stackType,
            stackHeading : element.stackHeading,
            stackList: element.stackList
          }
          this.skills.push(tempStack);
        });
      }
    })
  }

}
