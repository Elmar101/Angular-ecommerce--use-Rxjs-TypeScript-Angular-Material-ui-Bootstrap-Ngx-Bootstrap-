import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { CartService } from './cart.service';

@Injectable()
export class OrderService {
  order = new Order();
  constructor(public cartService: CartService) { }
  clearOrder(){
    this.order.id = null;
    this.order.name = this.order.adress = this.order.city = this.order.phone = this.order.email = null;
    this.order.isSent = false;
    this.cartService.clearCart();
  }

}
