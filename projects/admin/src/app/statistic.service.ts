import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'projects/common/src/lib/base.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Statistic } from './statistic';

@Injectable({
  providedIn: 'root',
})
export class StatisticService extends BaseService {
  constructor(private authService: AuthService, http: HttpClient) {
    super(http);
  }

  getAvgOrderValue(): Observable<Statistic> {
    return this.get<Statistic>(
      `statistic/${this.authService.appKey}/average-spending`
    );
  }

  getCouponsUsed(): Observable<Statistic> {
    return this.get<Statistic>(
      `statistic/${this.authService.appKey}/coupons/used`
    );
  }

  getCouponsUnused(): Observable<Statistic> {
    return this.get<Statistic>(
      `statistic/${this.authService.appKey}/coupons/unused`
    );
  }

  getTopSellingProducts(): Observable<Statistic> {
    return this.get<Statistic>(
      `statistic/${this.authService.appKey}/top-selling-products`
    );
  }
}
