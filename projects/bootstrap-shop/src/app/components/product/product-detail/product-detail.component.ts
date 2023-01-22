import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'projects/bootstrap-shop/src/app/cart.service';
import { Product } from 'projects/common/src/lib/product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({ product: product, quantity: 1 });
  }
}
