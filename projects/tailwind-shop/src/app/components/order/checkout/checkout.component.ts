import { Component } from '@angular/core';
import { Cart } from 'projects/common/src/lib/cart';
import { Coupon } from 'projects/common/src/lib/coupon';
import { CouponService } from '../../../coupon.service';
import { Router } from '@angular/router';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  coupons: Coupon[] = [];
  couponCode: string = '';
  cart: Cart = {} as Cart;

  constructor(
    private cartService: CartService,
    private couponService: CouponService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  addCoupon() {
    this.couponService.getCouponByCode(this.couponCode).subscribe((coupon) => {
      this.coupons.push(coupon);
      this.couponCode = '';
    });
  }

  buy() {
    this.cartService.buy(this.coupons.map((c) => c.id)).subscribe((order) => {
      this.cartService.clearCart();
      this.coupons = [];
      this.router.navigateByUrl('/orders');
    });
  }
}
