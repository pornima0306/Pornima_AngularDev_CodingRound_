import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { CardComponent } from './shared/components/card/card.component';
import { LoginComponent } from './shared/components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AdminCardsComponent } from './shared/components/admin-cards/admin-cards.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    CardComponent,
    LoginComponent,
    AdminCardsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
