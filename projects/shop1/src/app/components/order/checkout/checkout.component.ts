import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { CartService } from 'projects/common/src/lib/cart.service';
import { CouponService } from '../../../coupon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  coupons: Guid[] = [];
  couponCode: string = '';

  constructor(
    private cartService: CartService,
    private couponService: CouponService
  ) {}

  addCoupon() {
    this.couponService.getCouponByCode(this.couponCode).subscribe((coupon) => {
      this.coupons.push(coupon.id);
      this.couponCode = '';
    });
  }

  buy() {
    this.cartService.buy(this.coupons).subscribe((order) => {
      this.cartService.clearCart();
      this.coupons = [];
    });
  }
}
