import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { CartService } from 'projects/common/src/lib/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  coupons: Guid[] = [];
  couponCode: string = '';

  constructor(private cartService: CartService) {}

  addCoupon() {
    this.coupons.push(Guid.parse(this.couponCode));
    this.couponCode = '';
  }

  buy() {
    this.cartService.buy(this.coupons).subscribe((order) => {
      console.log(order);
      this.cartService.clearCart();
    });
  }
}
