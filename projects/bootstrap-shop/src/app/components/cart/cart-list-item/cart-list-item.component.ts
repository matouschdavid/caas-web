import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollectionPosition } from 'projects/common/src/lib/collection-position';
import { Product } from 'projects/common/src/lib/product';

@Component({
  selector: '.app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css'],
})
export class CartListItemComponent {
  @Input() item: CollectionPosition | null = null;

  @Output() removeItem: EventEmitter<CollectionPosition> = new EventEmitter();
  @Output() decreaseItem: EventEmitter<Product> = new EventEmitter();
  @Output() increaseItem: EventEmitter<Product> = new EventEmitter();

  removeItemFromCart(item: CollectionPosition | null) {
    if (item === null) return;
    this.removeItem.emit(item);
  }

  decreaseItemFromCart(item: Product | undefined) {
    this.decreaseItem.emit(item);
  }

  increaseItemFromCart(item: Product | undefined) {
    this.increaseItem.emit(item);
  }
}
