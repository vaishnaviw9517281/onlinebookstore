import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderStatus implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor() { }

  ngOnInit() {
   
  }
  
  updateCartStatus() {
   
  }


}
