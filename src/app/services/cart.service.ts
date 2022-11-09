import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  storage = window.localStorage;
  constructor() { }

  getCartItems(): Cart[] | [] {
    const cartItems = this.storage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }

  addToCart(cartpro: Cart[]): void {
    this.storage.setItem('cart', JSON.stringify(cartpro));
  }
  removeFromCart(cartpro: Cart): void {
    let cartpros = this.getCartItems().filter(item => item.id !== cartpro.id);
    this.clearCart();
    this.addToCart(cartpros);
  }

  clearCart(): void {
    this.storage.clear();
  }
}
