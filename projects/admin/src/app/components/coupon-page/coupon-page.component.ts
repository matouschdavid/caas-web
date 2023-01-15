import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Coupon } from 'projects/common/src/lib/coupon';

@Component({
  selector: 'app-coupon-page',
  templateUrl: './coupon-page.component.html',
  styleUrls: ['./coupon-page.component.css'],
})
export class CouponPageComponent {
  getEmpty(): Coupon {
    return new Coupon(Guid.createEmpty(), '', 0, false);
  }

  getTitleValue(coupon: Coupon): string {
    return coupon.code;
  }

  getContentValues(coupon: Coupon): string[] {
    return [`for ${coupon.amount}`, coupon.isValid ? 'valid' : 'invalid'];
  }

  getFooterValue(coupon: Coupon): string {
    return `Id: ${coupon.id}`;
  }
}
