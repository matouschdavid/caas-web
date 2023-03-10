import { Component } from '@angular/core';
import { Order } from 'projects/common/src/lib/order';
import { OrderService } from '../../../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders.sort((a: Order, b: Order) => {
        return (
          Date.parse(String(b.orderDate)) - Date.parse(String(a.orderDate))
        );
      });
    });
  }
}
