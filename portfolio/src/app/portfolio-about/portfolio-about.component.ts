import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { AboutInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.scss']
})
export class PortfolioAboutComponent implements OnInit, AfterViewInit, OnDestroy {

  selfDescription: string;
  keywords: Array<string> = [];
  visibleKeywords: Array<string> = [];

  @ViewChild('aboutCard') aboutCard!: ElementRef;

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.selfDescription = "I'm a full stack developer with <strong>3.5+ years</strong> building enterprise-grade apps at Orion Innovtion, Chennai — Angular UIs to .NET APIs to cloud data pipelines. <br><br> My sweet spot is the messy middle most developers avoid — <strong>authentication, API design,</strong> and cloud architecture. I've shipped Okta SSO, built REST connectors for ServiceNow, cut cloud costs 40% via GCP filtering, and built a full AI product UI solo. <br><br> I also run KT sessions for my team — because <strong>good code is only half the job.</strong>";
    this.getAboutKeyWords();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateKeywords();
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (this.aboutCard) {
      this.observer.observe(this.aboutCard.nativeElement);
    }
  }

  private animateKeywords(): void {
    this.visibleKeywords = [];
    this.keywords.forEach((keyword, index) => {
      setTimeout(() => {
        this.visibleKeywords.push(keyword);
      }, index * 180);
    });
  }

  getAboutKeyWords() {
    this.portfolioAdminHttpService.getAboutKeyword().subscribe({
      next: (keywords: Array<AboutInfo>) => {
        keywords.forEach(element => {
          this.keywords.push(element.aboutKeyword);
        });
        // If the section is already visible when data arrives, animate immediately
        if (this.hasAnimated) {
          this.animateKeywords();
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

}
