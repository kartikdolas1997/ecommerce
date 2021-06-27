import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { UsernameComponent } from './username/username.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrdersSuccessComponent } from './orders-success/orders-success.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';


// import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    UsernameComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    AdminProductsComponent,
    CheckOutComponent,
    OrdersSuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    // AngularFireAuthModule,
    
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    
    // MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService, AuthGuard,UserService, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
