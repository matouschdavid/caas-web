import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollectionPosition } from 'projects/common/src/lib/collection-position';
import { Product } from 'projects/common/src/lib/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Input() cartItems: CollectionPosition[] = [];

  @Output() removeItem: EventEmitter<CollectionPosition> = new EventEmitter();
  @Output() decreaseItem: EventEmitter<Product> = new EventEmitter();
  @Output() increaseItem: EventEmitter<Product> = new EventEmitter();

  removeItemFromCart(item: CollectionPosition) {
    this.removeItem.emit(item);
  }

  decreaseItemFromCart(item: Product) {
    this.decreaseItem.emit(item);
  }

  increaseItemFromCart(item: Product) {
    this.increaseItem.emit(item);
  }
}
