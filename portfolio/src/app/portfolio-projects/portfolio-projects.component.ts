import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef, OnDestroy } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { ProjectInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  projects: Array<ProjectInfo> = [];

  @ViewChildren('projectCard') projectCardRefs!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    this.projectCardRefs.changes.subscribe(() => this.observeCards());
    this.observeCards();
  }

  private observeCards(): void {
    this.projectCardRefs.forEach(ref => this.observer.observe(ref.nativeElement));
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  getProjects() {
    this.portfolioAdminHttpService.getFeature().subscribe({
      next: (projects: Array<ProjectInfo>) => {
        projects.forEach(prj => {
          const tempPrj: ProjectInfo = {
            name: prj.name,
            description: prj.description,
            highlight: prj.highlight,
          };
          this.projects.push(tempPrj);
        });
      }
    });
  }
}
