import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'projects/common/src/lib/base.service';
import { Shop } from 'projects/common/src/lib/shop';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService extends BaseService {
  constructor(private authService: AuthService, http: HttpClient) {
    super(http);
  }

  getShop(): Observable<Shop> {
    return this.get<Shop>(`shop/${this.authService.appKey}`);
  }

  createShop(shop: Shop): Observable<Shop> {
    return this.post<Shop>(`shop`, shop);
  }

  deleteShop(): Observable<Shop> {
    return this.delete<Shop>(`shop/${this.authService.appKey}`);
  }
}
