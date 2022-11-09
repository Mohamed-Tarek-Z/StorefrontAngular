import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems!: Cart[];
  totalPrice!: number;
  constructor(private cartSer: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartSer.getCartItems();
    this.calculateTotal();
  }

  onSubmit(name: string) {
    this.cartSer.clearCart();
    this.router.navigate([`confirm/${name}/${this.totalPrice}`]);
  }

  calculateTotal(): void {
    this.cartItems = this.cartSer.getCartItems();
    this.totalPrice = this.cartItems.reduce((tot, item) => {
      this.totalPrice = parseFloat(
        (tot + item.price * Number(item.amount)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }
}
