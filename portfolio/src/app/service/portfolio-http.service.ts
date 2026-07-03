import { Injectable } from '@angular/core';
import { LoginInfo, LoginResponse } from 'src/Shared/portfolio.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHttpService {

  constructor(private httpClient: HttpClient) { }

  post<T>(url: string, data: Object) : Observable<T> {
    return this.httpClient.post<T>(url, data);
  }

  get<T>(url : string) : Observable<T> {
    return this.httpClient.get<T>(url);
  }
}
