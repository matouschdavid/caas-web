import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Cart } from 'projects/common/src/lib/cart';
import { CollectionPosition } from 'projects/common/src/lib/collection-position';
import { Product } from 'projects/common/src/lib/product';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css'],
})
export class CartDisplayComponent {
  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = new Cart(Guid.createEmpty(), new Date(), null, [], 0);
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(position: CollectionPosition): void {
    this.cartService.removeFromCart({
      product: position.product,
      quantity: position.quantity,
    });
  }

  increaseQuantity(product: Product): void {
    this.cartService.addToCart({ product: product, quantity: 1 });
  }

  decreaseQuantity(product: Product): void {
    this.cartService.removeFromCart({ product: product, quantity: 1 });
  }
}
