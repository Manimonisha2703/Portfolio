import { Component, OnInit } from '@angular/core';
import { GlimpsesInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {

  glimpses : Array<GlimpsesInfo> = [];

  constructor() { }

  ngOnInit(): void {

    this.glimpses.push({Value: "3.5+", Name: "years of experience"});
    this.glimpses.push({Value: "40%", Name: "cloud cost saved"});
    this.glimpses.push({Value: "8.7", Name: "CGPA (B.E.)"});
    this.glimpses.push({Value: "10K", Name: "hackathon prize"});
  }

}
