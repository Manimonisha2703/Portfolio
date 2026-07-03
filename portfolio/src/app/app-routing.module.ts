import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioAdminLoginComponent } from './portfolio-admin-login/portfolio-admin-login.component';
import { PortfolioMainComponent } from './portfolio-main/portfolio-main.component';
import { PortfolioAdminActionsComponent } from './portfolio-admin-actions/portfolio-admin-actions.component';

const routes: Routes = [
    {
      path : '',
      component : PortfolioMainComponent
    },
    {
      path: 'admin-login',
      component : PortfolioAdminLoginComponent
    },
    {
      path: 'admin-actions',
      component: PortfolioAdminActionsComponent
    }
  ]

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
