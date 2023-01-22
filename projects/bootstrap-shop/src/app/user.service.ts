import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from '../../../common/src/lib/base.service';
import { Customer } from '../../../common/src/lib/customer';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  private customerId: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);

  constructor(http: HttpClient) {
    super(http);
  }

  getCustomerIdUpdates(): Observable<number | null> {
    if (this.customerId.getValue() === null) {
      this.customerId.next(Number(localStorage.getItem('customerId')));
    }
    return this.customerId.asObservable();
  }

  getCustomerId(): number | null {
    return this.customerId.getValue();
  }

  setCustomerId(customerId: number | null): void {
    console.log('setCustomerId', customerId);
    this.customerId.next(customerId);
    if (customerId === null) {
      localStorage.removeItem('customerId');
    } else {
      localStorage.setItem('customerId', customerId.toString());
    }
  }

  getCurrentUser(): Observable<Customer> {
    return super.get(`customer/${this.getCustomerId()}`);
  }

  signUp(customer: Customer): Observable<Customer> {
    return super.post(`customer/${environment.appKey}`, customer);
  }

  login(customerId: number): Observable<Customer> {
    return super.get(`customer/${customerId}`);
  }
}
