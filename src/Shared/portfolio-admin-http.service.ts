import { Injectable } from '@angular/core';
import { AboutDetails, GlimpsesInfo } from './portfolio.model';
import { PortfolioHttpService } from 'src/app/service/portfolio-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAdminHttpService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: PortfolioHttpService) { }

  addGlimpses(glimpsesInfo: GlimpsesInfo) {
    return this.http.post(`${this.baseUrl}/Glimpses/addGlimpses`, glimpsesInfo);
  }

  getGlimpses() {
    return this.http.get(`${this.baseUrl}/Glimpses/GetGlimpses`);
  }

  addAbout(aboutDetails: AboutDetails) {
    return this.http.post(`${this.baseUrl}/About/addAbout`, aboutDetails);
  }
}
