import { Component } from '@angular/core';
import { Product } from 'projects/common/src/lib/product';
import { ProductService } from 'projects/shop1/src/app/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  getEmpty(): Product {
    return new Product(0, '', '', '', 0, false);
  }

  getTitleValue(product: Product): string {
    return product.name;
  }

  getContentValues(product: Product): string[] {
    return [
      product.description,
      product.price.toString(),
      product.isDeleted.toString(),
    ];
  }

  getFooterValue(product: Product): string {
    return `Id: ${product.id}`;
  }
}
