import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../../common/src/lib/base.service';
import { Product } from '../../../common/src/lib/product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
  getProducts(searchTerm: string): Observable<Product[]> {
    return super.get<Product[]>(
      `product/all/${environment.appKey}?search=${searchTerm}`
    );
  }

  getProduct(id: number): Observable<Product> {
    return super.get<Product>(`product/${id}`);
  }
}
