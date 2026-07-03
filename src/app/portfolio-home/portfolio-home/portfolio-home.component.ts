import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { GlimpsesInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {

  glimpses : Array<GlimpsesInfo> = [];

  constructor(private portfolioAdminHttpService : PortfolioAdminHttpService) { }

  ngOnInit(): void {

    this.portfolioAdminHttpService.getGlimpses().subscribe({
      next : (response : Array<GlimpsesInfo>) => {

        response.forEach(element => {
          const tempResponse = new GlimpsesInfo();
          tempResponse.value = element.value;
          tempResponse.description = element.description;

          this.glimpses.push(tempResponse);
        });
        
        console.log(response);
      }
    })


  }

}
