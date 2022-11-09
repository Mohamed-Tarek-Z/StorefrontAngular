import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faGifts } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  name!: string | null;
  totalPrice!: number;
  fag = faGifts;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.totalPrice = Number(params.get('total'));
    })
  }

}
