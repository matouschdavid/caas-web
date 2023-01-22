import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, BehaviorSubject } from 'rxjs';
import { BaseService } from '../../../common/src/lib/base.service';
import { Cart } from '../../../common/src/lib/cart';
import { CollectionPosition } from '../../../common/src/lib/collection-position';
import { Order } from '../../../common/src/lib/order';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  cartGuid: Guid | null = null;
  cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(
    new Cart(Guid.createEmpty(), new Date(), null, [], 0)
  );

  constructor(private userService: UserService, http: HttpClient) {
    super(http);
    this.initCart();
  }

  initCart(): void {
    const cartGuidString = localStorage.getItem('cartGuid');
    if (cartGuidString) {
      this.cartGuid = Guid.parse(cartGuidString);
      this.updateCart();
    } else {
      this.cartGuid = Guid.create();
      localStorage.setItem('cartGuid', this.cartGuid.toString());
      this.cart.next(new Cart(this.cartGuid, new Date(), null, [], 0));
    }
  }

  getCart(): Observable<Cart> {
    return this.cart.asObservable();
  }

  private updateCart() {
    super.get<Cart>(`cart/${this.cartGuid}`).subscribe((cart) => {
      this.cart?.next(cart);
    });
  }

  addToCart(product: CollectionPosition): void {
    super
      .put<CollectionPosition>(`cart/${this.cartGuid}/add`, {
        quantity: product.quantity,
        productId: product.product.id,
      })
      .subscribe((_) => this.updateCart());
  }

  removeFromCart(product: CollectionPosition): void {
    super
      .put<CollectionPosition>(`cart/${this.cartGuid}/remove`, {
        quantity: product.quantity,
        productId: product.product.id,
      })
      .subscribe((_) => this.updateCart());
  }

  buy(coupons: Guid[]): Observable<Order> {
    return super.post(
      `order/${this.cartGuid}/${this.userService.getCustomerId()}`,
      coupons
    );
  }

  clearCart(): void {
    localStorage.removeItem('cartGuid');
    this.initCart();
  }
}
