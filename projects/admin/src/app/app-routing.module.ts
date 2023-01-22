import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponPageComponent } from './components/coupon-page/coupon-page.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { IsLoggedInGuard } from './is-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductPageComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'customers',
    component: CustomerPageComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'coupons',
    component: CouponPageComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'shop',
    component: ShopPageComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'index.html',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'stats',
    component: StatisticsComponent,
    canActivate: [IsLoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
