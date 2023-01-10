import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from './product';
import { ShopService } from '../../../shop1/src/app/shop.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(private shopService: ShopService, http: HttpClient) {
    super(http);
  }
  getProducts(searchTerm: string): Observable<Product[]> {
    return super.get<Product[]>(
      `product/all/${this.shopService.getShopId()}?search=${searchTerm}`
    );
  }

  getProduct(id: number): Observable<Product> {
    return super.get<Product>(`product/${id}`);
  }
}
