import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    OrderConfirmationComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
