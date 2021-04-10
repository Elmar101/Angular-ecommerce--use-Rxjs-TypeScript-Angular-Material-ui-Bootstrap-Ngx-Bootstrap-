import {  Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  items: CartItem[] = [];
  itemCount!: number;

  totalPrice(price:any, quantity: number){
    return (price as number) * quantity;
  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   this.items = this.cartService.items;
   this.itemCount= this.cartService.itemCount
  }


  removeItem(itemId: any){
    return this.cartService.removeItem(itemId);
  }

  updateQuantity(itemProduct: Product, value: string){
    const quantity = Number(value);
    return this.cartService.updateQuantity(itemProduct,quantity);
  }
  get cartServiceTotalPrice(){
    return this.cartService.totalPrice;
  }
}
