import { Component } from '@angular/core';
import { Product } from 'projects/common/src/lib/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../../product.service';
import { SearchService } from '../../../search.service';

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
      this.products$ = this.productService.getProducts(searchTerm);
    });
  }
}
