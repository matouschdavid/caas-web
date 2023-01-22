import { Component, Input } from '@angular/core';
import { Product } from 'projects/common/src/lib/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
  @Input() product: Product | undefined;
}
