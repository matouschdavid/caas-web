import { Injectable } from '@angular/core';
import { BaseService } from 'projects/common/src/lib/base.service';
import { Coupon } from 'projects/common/src/lib/coupon';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponService extends BaseService {
  getCouponByCode(code: string): Observable<Coupon> {
    return this.get(`coupon/${environment.appKey}/${code}`);
  }
}
