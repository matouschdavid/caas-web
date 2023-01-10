import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shopId: number;
  constructor() {
    this.shopId = environment.shopId;
  }

  getShopId(): number {
    return this.shopId;
  }
}
