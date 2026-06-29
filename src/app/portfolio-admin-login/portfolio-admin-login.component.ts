import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-admin-login',
  templateUrl: './portfolio-admin-login.component.html',
  styleUrls: ['./portfolio-admin-login.component.scss']
})
export class PortfolioAdminLoginComponent implements OnInit {

  userName: string = '';
  adminPassword: string = '';

  constructor(private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.userName, this.adminPassword).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/admin-actions']);

      }
    })
  }

}


