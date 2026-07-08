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
  private readonly HEADER_OFFSET = 72;

  constructor(private router: Router) { }

  ngOnInit(): void { }

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
      setTimeout(() => { this.scrollCloseEnabled = true; }, 300);
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.scrollCloseEnabled = false;
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMenu();

    const target = document.getElementById(sectionId);
    if (!target) return;

    const to = target.getBoundingClientRect().top + window.scrollY - this.HEADER_OFFSET;
    const from = window.scrollY;
    const duration = 800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      // ease-out expo: fast start, gentle deceleration into target
      const ease = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      window.scrollTo(0, from + (to - from) * ease);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  openAdminLogin() {
    if (this.isProd) return;
    this.router.navigate(['/admin-login']);
  }
}
