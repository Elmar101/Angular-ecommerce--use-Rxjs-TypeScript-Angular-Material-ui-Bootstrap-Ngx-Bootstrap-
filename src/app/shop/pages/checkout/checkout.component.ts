import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { AlertifyService } from 'src/app/service/alertify.service';
import { OrderService } from 'src/app/service/order.service';
import { OrderRepositoryService } from 'src/app/service/repository-service/orderRepo.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false; // istifadeci eger sifarisi vermishse
  submitted: boolean = false; //istifadechi buttonu submit edib ya yox
  constructor(
    public orderService: OrderService,
    private orderRepoService: OrderRepositoryService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}
  get JsonProduct() {
    return JSON.stringify(this.orderService);
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepoService
        .saveOrder(this.orderService)
        .pipe(delay(3000))
        .subscribe((order) => {
          this.orderService.clearOrder();
          this.orderSent = true;
          this.submitted = false;
        });
      this.alertifyService.success('Əməliyatiniz Uqurlu oldu');
      form.reset();
    } else {
      this.alertifyService.error('Bir xəta oldu.Fomunuzu kontrol ediz.');
    }
  }
}
