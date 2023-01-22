import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductListItemComponent } from './components/product/product-list-item/product-list-item.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { CartDisplayComponent } from './components/cart/cart-display/cart-display.component';
import { CartListItemComponent } from './components/cart/cart-list-item/cart-list-item.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { OrderListItemComponent } from './components/order/order-list-item/order-list-item.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { LoginComponent } from './components/user-management/login/login.component';
import { ProfileComponent } from './components/user-management/profile/profile.component';
import { SignUpComponent } from './components/user-management/sign-up/sign-up.component';
import { UserComponent } from './components/user-management/user/user.component';
import { CommonModule } from 'projects/common/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    SearchComponent,
    HeaderComponent,
    ProductPageComponent,
    HomeComponent,
    ProductDetailComponent,
    CartDisplayComponent,
    CheckoutComponent,
    OrderListComponent,
    OrderListItemComponent,
    CartListItemComponent,
    CartListComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
