import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio-education',
  templateUrl: './portfolio-education.component.html',
  styleUrls: ['./portfolio-education.component.scss']
})
export class PortfolioEducationComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('educationCard') educationCardRef!: ElementRef;

  private observer!: IntersectionObserver;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    if (this.educationCardRef) {
      this.observer.observe(this.educationCardRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

}
