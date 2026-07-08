import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss'],
})
export class PortfolioHeaderComponent implements OnInit {
  isMenuOpen = false;
  isProd = true;
  private scrollCloseEnabled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.isMenuOpen && this.scrollCloseEnabled) {
      this.isMenuOpen = false;
      this.scrollCloseEnabled = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.scrollCloseEnabled = false;
    if (this.isMenuOpen) {
      setTimeout(() => {
        this.scrollCloseEnabled = true;
      }, 300);
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.scrollCloseEnabled = false;
  }

  openAdminLogin() {
    if(this.isProd) {
      return
    }
    this.router.navigate(['/admin-login']);
  }
}
