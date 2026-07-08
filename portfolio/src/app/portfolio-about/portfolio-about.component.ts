import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { AboutInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.scss']
})
export class PortfolioAboutComponent implements OnInit {

  selfDescription: string;
  keywords: Array<string> = [];

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.selfDescription = "I'm a full stack developer with <strong>3.5+ years</strong> building enterprise-grade apps at DucenIt, Chennai — Angular UIs to .NET APIs to cloud data pipelines. <br><br> My sweet spot is the messy middle most developers avoid — <strong>authentication, API design,</strong> and cloud architecture. I've shipped Okta SSO, built REST connectors for ServiceNow, cut cloud costs 40% via GCP filtering, and built a full AI product UI solo. <br><br> I also run KT sessions for my team — because <strong>good code is only half the job.</strong>";
    // this.keywords = ["🔐 Enterprise Auth", "☁️ Cloud Optimisation", "🔗 API Design", "🏆 Hackathon Winner", "🎓 CGPA 8.7"];
    this.getAboutKeyWords();
  }

  getAboutKeyWords() {
    this.portfolioAdminHttpService.getAboutKeyword().subscribe( {
      next : (keywords: Array<AboutInfo>) => {
        keywords.forEach(element => {
          this.keywords.push(element.aboutKeyword);
        });
      }
    })
  }

}
