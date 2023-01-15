import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Order } from './order';
import { UserService } from '../../../shop1/src/app/user.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  constructor(private userService: UserService, http: HttpClient) {
    super(http);
  }
  getOrders(): Observable<Order[]> {
    return super.get(`order/allofcustomer/${this.userService.getCustomerId()}`);
  }
}
