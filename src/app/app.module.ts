// Firebase
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
// import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { initializeApp } from 'firebase/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

// services
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuardService,
    AdminAuthGuardService,
    AuthService,
    UserService,
    CategoryService,
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
