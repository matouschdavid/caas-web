import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Shop } from 'projects/common/src/lib/shop';
import { AuthService } from '../../auth.service';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
})
export class ShopPageComponent {
  shop: Shop;
  hasShop: boolean = false;
  fileUrl: SafeResourceUrl = '';

  constructor(
    private shopService: ShopService,
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {
    this.shop = new Shop(0, '', this.authService.appKey ?? '');
  }

  ngOnInit() {
    this.shopService.getShop().subscribe((shop) => {
      this.shop = shop;
      this.hasShop = true;
      this.createConfigUrl();
    });
  }

  createConfigUrl() {
    const data = `export const environment = {
      production: false,
      shopId: ${this.shop.id},
    };`;
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }

  createShop() {
    this.shopService.createShop(this.shop).subscribe((shop) => {
      this.shop = shop;
      this.hasShop = true;
    });
  }

  deleteShop() {
    this.shopService.deleteShop().subscribe((shop) => {
      this.shop = new Shop(0, '', this.authService.appKey ?? '');
      this.hasShop = false;
    });
  }
}
