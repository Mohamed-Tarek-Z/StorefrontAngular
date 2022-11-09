import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart!: Cart[];
  @Input() item!: Cart;
  @Output() change: EventEmitter<Cart[]> = new EventEmitter();
  amount!:string;

  constructor(private cartSer: CartService) { }

  ngOnInit(): void {
    this.amount = this.item.amount;
  }

  selectChange(item: Cart) {
    const index = this.cart.indexOf(item);
    this.cart[index] = item;
    this.cart[index].amount = this.amount;
    if (parseInt(this.amount) > 0) {
      this.cartSer.addToCart(this.cart);
      alert(`${item.name} amount updated`);
    }
    else {
      alert(`${item.name} removed fom cart`);
      this.cartSer.removeFromCart(item);
    }
    this.change.emit(this.cart);
    window.location.reload();
  }
}
