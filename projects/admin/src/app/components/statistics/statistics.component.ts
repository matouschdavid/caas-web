import { Component } from '@angular/core';
import { Product } from 'projects/common/src/lib/product';
import { Statistic } from '../../statistic';
import { Observable } from 'rxjs';
import { StatisticService } from '../../statistic.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  avgOrderValue: Observable<Statistic> = new Observable<Statistic>();
  couponsUsed: Observable<Statistic> = new Observable<Statistic>();
  couponsUnused: Observable<Statistic> = new Observable<Statistic>();
  topSellingProducts: Observable<Statistic> = new Observable<Statistic>();

  constructor(private statisticService: StatisticService) {}

  ngOnInit() {
    this.avgOrderValue = this.statisticService.getAvgOrderValue();
    this.couponsUsed = this.statisticService.getCouponsUsed();
    this.couponsUnused = this.statisticService.getCouponsUnused();
    this.topSellingProducts = this.statisticService.getTopSellingProducts();
  }
}
