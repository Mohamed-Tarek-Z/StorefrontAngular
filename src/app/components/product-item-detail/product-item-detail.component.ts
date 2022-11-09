import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  pros!: Product[];
  product!: Product;
  amount = '1';
  id = 0;
  count = ['1', '2', '3', '4', '5'];

  constructor(private route: ActivatedRoute, private cartser: CartService, private proSer: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.proSer.getProducts().subscribe((res) => {
      this.pros = res;
      this.product = this.pros.filter((item) => item.id === this.id)[0];
    });
  }

  onSubmit(): void {
    const cartItems: Cart[] = this.cartser.getCartItems();
    let item = cartItems.find(item => item.id === this.product.id);
    if (item) {
      item.amount = this.amount;
      item ? this.cartser.addToCart(cartItems) : null;
      alert(`updated`);
    } else {
      cartItems.push(Object.assign(this.product, { amount: this.amount }));
      this.cartser.addToCart(cartItems);
      alert(`${this.product?.name
        } has been added to your cart.`);
    }
  }

}
