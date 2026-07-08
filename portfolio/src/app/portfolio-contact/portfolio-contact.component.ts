import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('contactCard') contactCardRef!: ElementRef;

  private observer!: IntersectionObserver;

  enableOpentoWork: boolean = false;

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

    if (this.contactCardRef) {
      this.observer.observe(this.contactCardRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/resume/Monisha_Resume.pdf';
    link.download = 'Monisha_Resume.pdf';
    link.click();
  }

}
