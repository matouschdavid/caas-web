import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListItemComponent } from './components/item-list-item/item-list-item.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { CouponPageComponent } from './components/coupon-page/coupon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    ProductPageComponent,
    CustomerPageComponent,
    ShopPageComponent,
    ItemListComponent,
    ItemListItemComponent,
    ItemCreateComponent,
    CouponPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
