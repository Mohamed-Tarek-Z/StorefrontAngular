import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'product/:id',component:ProductItemDetailComponent},
  {path:'confirm/:name/:total',component:OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
