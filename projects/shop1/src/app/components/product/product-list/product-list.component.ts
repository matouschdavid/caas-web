import { Component, Input } from '@angular/core';
import { Product } from 'projects/common/src/lib/product';
import { ProductService } from 'projects/shop1/src/app/product.service';
import { SearchService } from 'projects/common/src/lib/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products$: Observable<Product[]> = new Observable<Product[]>();
  constructor(
    private productService: ProductService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.getSearchTerm().subscribe((searchTerm) => {
      console.log(`searchTerm: ${searchTerm}`);
      this.products$ = this.productService.getProducts(searchTerm);
    });
  }
}
