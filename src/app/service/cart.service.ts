import { Injectable } from "@angular/core";
import { CartItem } from "../model/cart-item";
import { Product } from "../model/product";
@Injectable()
export class CartService {
  public items: CartItem[] = [];
  public itemCount: number = 0;
  public totalPrice: number =0;

  addItem(product: Product,quantity: number = 1){
    let item = this.items.find( item => item.product.id == product.id);
    if(item !=undefined ){
      item.quantity += quantity;
    }else {
      this.items.push( new CartItem(product,quantity) );
    }
    this.calculateCart();
  }

  updateQuantity( product:Product, quantity: number){
    let item = this.items.find( item => item.product.id == product.id);
    if(item !=undefined && quantity!=undefined){
      item.quantity = quantity;
    }
    this.calculateCart();
  }

  calculateCart(){
    this.itemCount = 0;
    this.totalPrice = 0;
    this.items.forEach( item=>{
      this.itemCount += item.quantity;
      this.totalPrice += ( item.quantity * (item.product?.price as number));
    })
  }

  removeItem(id: number){
    let index = this.items.findIndex(item=> (item.product?.id as number) == id);
    this.items.splice(index,1);
    this.calculateCart();
  }
  clearCart(){
    this.items = [];
    this.itemCount = 0;
    this.totalPrice = 0;
  }

  addNewItem(product:Product,quantity: number = 1){
    let item = this.items.find(item=> item.product.id ==product.id);

    if(item !=undefined && quantity!=undefined){
      item.quantity = quantity;
    }
    else {
      this.items.push( new CartItem(product,quantity) );
    }
   this.calculateCart();
  }

}
