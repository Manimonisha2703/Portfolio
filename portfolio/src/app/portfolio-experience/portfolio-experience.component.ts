import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef, OnDestroy } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { ExperienceInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-experience',
  templateUrl: './portfolio-experience.component.html',
  styleUrls: ['./portfolio-experience.component.scss']
})
export class PortfolioExperienceComponent implements OnInit, AfterViewInit, OnDestroy {

  experiences: Array<ExperienceInfo> = [];

  @ViewChildren('experienceCard') experienceCardRefs!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.getWorkExperience();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tags-visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    this.experienceCardRefs.changes.subscribe(() => this.observeCards());
    this.observeCards();
  }

  private observeCards(): void {
    this.experienceCardRefs.forEach(ref => this.observer.observe(ref.nativeElement));
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  getWorkExperience() {
    this.portfolioAdminHttpService.getExperience().subscribe({
      next: (experience: Array<ExperienceInfo>) => {
        experience.forEach(exp => {
          const tempExp: ExperienceInfo = {
            role: exp.role,
            company: exp.company,
            duration: exp.duration,
            workDescription: exp.workDescription,
            technologies: exp.technologies
          };
          this.experiences.push(tempExp);
        });
      }
    });
  }

}
