import { Injectable } from '@angular/core';
import { AboutInfo, ExperienceInfo, GlimpsesInfo, ProjectInfo, StackDetails } from './portfolio.model';
import { PortfolioHttpService } from 'src/app/service/portfolio-http.service';
import { environment } from 'src/environments/environment';
import { get } from 'http';

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

  addAboutKeyword(tempAboutInfo: string) {
    const aboutKwd : AboutInfo = {
      aboutKeyword : tempAboutInfo
    }
    return this.http.post(`${this.baseUrl}/About/addAboutkeyword`, aboutKwd);
  }

  getAboutKeyword() {
    return this.http.get(`${this.baseUrl}/About/GetAboutKeyword`);
  }

  addStack(stackDetails: StackDetails) {
    return this.http.post(`${this.baseUrl}/Stack/AddStack`, stackDetails);
  }

  getStack(){
    return this.http.get(`${this.baseUrl}/Stack/GetStack`);
  }

  addExperience(experienceDetails: ExperienceInfo){
    return this.http.post(`${this.baseUrl}/Experience/AddExperience`, experienceDetails)
  }

  getExperience(){
    return this.http.get(`${this.baseUrl}/Experience/GetExperience`);
  }

  addFeature(projectDetails : ProjectInfo) {
    return this.http.post(`${this.baseUrl}/Project/AddProjects`, projectDetails);
  }

  getFeature() {
    return this.http.get(`${this.baseUrl}/Project/GetProjects`);
  }
}
