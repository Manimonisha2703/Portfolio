import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { GlimpsesInfo } from 'src/Shared/portfolio.model';

interface GlimpseDisplay {
  displayValue: string;
  description: string;
  targetNumber: number;
  suffix: string;
}

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit, OnDestroy {

  glimpses : Array<GlimpsesInfo> = [];
  glimpseDisplays: Array<GlimpseDisplay> = [];
  enableOpentoWork: boolean = false;

  private timers: any[] = [];

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    this.portfolioAdminHttpService.getGlimpses().subscribe({
      next: (response: Array<GlimpsesInfo>) => {
        response.forEach(element => {
          const tempResponse = new GlimpsesInfo();
          tempResponse.value = element.value;
          tempResponse.description = element.description;
          this.glimpses.push(tempResponse);
        });

        this.initDisplays();
        this.runCountUps();
      }
    });
  }

  private initDisplays(): void {
    this.glimpseDisplays = this.glimpses.map(g => {
      const match = g.value.match(/^(\d+(\.\d+)?)(.*)$/);
      const targetNumber = match ? parseFloat(match[1]) : 0;
      const suffix = match ? match[3] : g.value;
      return {
        displayValue: '0' + suffix,
        description: g.description,
        targetNumber,
        suffix
      };
    });
  }

  private runCountUps(): void {
    const duration = 1800; // ms
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    this.glimpseDisplays.forEach((item, index) => {
      // stagger each card by 150ms
      const delay = index * 150;
      const timer = setTimeout(() => {
        let frame = 0;
        const interval = setInterval(() => {
          frame++;
          // ease-out: decelerate as we approach the target
          const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
          const current = Math.round(progress * item.targetNumber);
          item.displayValue = current + item.suffix;

          if (frame >= totalFrames) {
            item.displayValue = item.targetNumber + item.suffix;
            clearInterval(interval);
          }
        }, 1000 / frameRate);
        this.timers.push(interval);
      }, delay);
      this.timers.push(timer);
    });
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
  }

}
