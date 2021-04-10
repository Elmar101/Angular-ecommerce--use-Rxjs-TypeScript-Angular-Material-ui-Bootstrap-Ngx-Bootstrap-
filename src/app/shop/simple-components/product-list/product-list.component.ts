import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { AlertifyService } from 'src/app/service/alertify.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];

  selectedProduct: Product | null = null;

  constructor(
    private cartService: CartService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProductToCart(product:Product){
    this.alertifyService.success(`${product.name} Mehsul Sebete elave edildi `);
    this.cartService.addItem(product);
    this.router.navigateByUrl('/card');
  }

  displayDetails(product: Product){
    this.selectedProduct = product;
  }

  hideDetails(){
    this.selectedProduct = null;
  }

  cartfullDetail(id: number | undefined){
    //this.cartService.addItem(product);
    this.router.navigate(['/cartFullDetail',id]);
  }
}
