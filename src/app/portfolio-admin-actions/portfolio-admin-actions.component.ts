import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';

@Component({
  selector: 'app-portfolio-admin-actions',
  templateUrl: './portfolio-admin-actions.component.html',
  styleUrls: ['./portfolio-admin-actions.component.scss']
})
export class PortfolioAdminActionsComponent implements OnInit {

  glimpsesValue: string = '';
  glimpsesDescription: string = '';

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
        console.log("egd")
      }
    }
    )
  }

}
