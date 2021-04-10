import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../order.service';
import { RestService } from '../rest.service';

@Injectable()
export class OrderRepositoryService {

  private orders: OrderService[] =[];

  constructor(private restService: RestService) { }

  getOrders(): OrderService[]{
    return this.orders;
  }

  saveOrder(order: OrderService): Observable<OrderService>{
    return this.restService.getSaveOrder(order);
  }
}
