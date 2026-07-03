import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header/portfolio-header.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home/portfolio-home.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioSkillsComponent } from './portfolio-skills/portfolio-skills.component';
import { PortfolioExperienceComponent } from './portfolio-experience/portfolio-experience.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
import { PortfolioEducationComponent } from './portfolio-education/portfolio-education.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { PortfolioAdminLoginComponent } from './portfolio-admin-login/portfolio-admin-login.component';
import { PortfolioMainComponent } from './portfolio-main/portfolio-main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioAdminActionsComponent } from './portfolio-admin-actions/portfolio-admin-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioHomeComponent,
    PortfolioAboutComponent,
    PortfolioSkillsComponent,
    PortfolioExperienceComponent,
    PortfolioProjectsComponent,
    PortfolioContactComponent,
    PortfolioEducationComponent,
    PortfolioFooterComponent,
    PortfolioAdminLoginComponent,
    PortfolioMainComponent,
    PortfolioAdminActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
