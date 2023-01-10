import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { LoginComponent } from './components/user-management/login/login.component';
import { ProfileComponent } from './components/user-management/profile/profile.component';
import { SignUpComponent } from './components/user-management/sign-up/sign-up.component';
import { HasUserGuard } from './has-user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [HasUserGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [HasUserGuard] },
  {
    path: 'orders',
    component: OrderListComponent,
    canActivate: [HasUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
