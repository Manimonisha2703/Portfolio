import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef, OnDestroy } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { SkillsInfo, StackDetails } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent implements OnInit, AfterViewInit, OnDestroy {

  skills: Array<StackDetails> = [];

  @ViewChildren('skillCard') skillCardRefs!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.getStack();
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

    // Observe cards when they exist, and re-observe after data loads
    this.skillCardRefs.changes.subscribe(() => this.observeCards());
    this.observeCards();
  }

  private observeCards(): void {
    this.skillCardRefs.forEach(ref => this.observer.observe(ref.nativeElement));
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  getStack() {
    this.portfolioAdminHttpService.getStack().subscribe({
      next: (stack: Array<StackDetails>) => {
        stack.forEach(element => {
          const tempStack = {
            stackType: element.stackType,
            stackHeading: element.stackHeading,
            stackList: element.stackList
          };
          this.skills.push(tempStack);
        });
      }
    });
  }

}
