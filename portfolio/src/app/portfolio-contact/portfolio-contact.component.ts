import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent implements OnInit {

  constructor() { }

  enableOpentoWork: boolean = false;

  ngOnInit(): void {
  }

  downloadResume(): void {
  const link = document.createElement('a');
  link.href = 'assets/resume/Monisha_Resume.pdf';
  link.download = 'Monisha_Resume.pdf';
  link.click();
}

}
