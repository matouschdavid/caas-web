import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'projects/common/src/lib/base.service';
import { Order } from 'projects/common/src/lib/order';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

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
