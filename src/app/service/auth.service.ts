import { Injectable } from '@angular/core';
import { PortfolioHttpService } from './portfolio-http.service';
import { LoginInfo, LoginResponse } from 'src/Shared/portfolio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: PortfolioHttpService) { }

  login(userName: string, password: string) {

    const loginInfo: LoginInfo = {
      UserName: userName,
      Password: password
    }
    return this.http.post<LoginResponse>(`${this.baseUrl}/login/ValidateUser`, loginInfo);
  }
}
