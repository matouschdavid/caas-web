import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'projects/common/src/lib/base.service';
import { Customer } from 'projects/common/src/lib/customer';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(private authService: AuthService, http: HttpClient) {
    super(http);
  }

  getCustomers(): Observable<Customer[]> {
    return super.get<Customer[]>(`customer/all/${this.authService.appKey}`);
  }
}
