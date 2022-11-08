import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  amount = '1';
  count = ['1', '2', '3', '4', '5'];

  constructor(private cartser: CartService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    const cartItems: Cart[] = this.cartser.getCartItems();
    let item = cartItems.find(item => item.id === this.product.id);
    if (item) {
      item.amount = this.amount;
      item ? this.cartser.addToCart(cartItems) : null;
      alert(`updated`);
    } else {
      cartItems.push(Object.assign(this.product, { amount: this.amount}));
      this.cartser.addToCart(cartItems);
      alert(`${this.product.name} has been added to your cart.`);
    }
  }
}
