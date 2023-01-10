import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(environment.baseUrl + url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(environment.baseUrl + url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(environment.baseUrl + url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(environment.baseUrl + url);
  }
}
