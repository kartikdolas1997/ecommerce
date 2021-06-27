import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AuthGuardService } from './auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersSuccessComponent } from './orders-success/orders-success.component';
import { ProductsComponent } from './products/products.component';
import { UsernameComponent } from './username/username.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },



  { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuardService] },
  { path: 'order-success', component: OrdersSuccessComponent, canActivate:[AuthGuardService] },
  { path: 'username', component: UsernameComponent },
  { path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuardService] },

  { path: 'admin/orders', component: AdminOrdersComponent, canActivate:[AuthGuardService,AdminAuthGuardService] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGuardService,AdminAuthGuardService] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
