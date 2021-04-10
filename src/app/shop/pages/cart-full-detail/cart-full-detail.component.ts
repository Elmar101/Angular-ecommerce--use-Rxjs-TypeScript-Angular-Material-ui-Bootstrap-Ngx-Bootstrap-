import { Component,  OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { CartItem } from 'src/app/model/cart-item';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { CommentService } from 'src/app/service/comment.service';
import { CommentRepoService } from 'src/app/service/repository-service/commentRepo.service';
import { ProductRepositoryService } from 'src/app/service/repository-service/productRepo.service';
import { RestService } from 'src/app/service/rest.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-cart-full-detail',
  templateUrl: './cart-full-detail.component.html',
  styleUrls: ['./cart-full-detail.component.scss']
})
export class CartFullDetailComponent implements OnInit{
  submitted: boolean = false;
  public selectedCategory!: Category | null;
  productCount!:number;
  product: any = [];
  products!: Product;
  selected='color';
  constructor(
    private xngBreadCrumbService: BreadcrumbService,
    private cartService: CartService,
    private restservice: RestService,
    private router:Router,
    private route: ActivatedRoute,
    private commentRepoService: CommentRepoService,
    public commentService: CommentService) { }

  get category(){
    return this.product["category"] ? this.product["category"] : null;
  }
  get model(){
    return this.product["model"] ? this.product["model"] : null;
  }

  get procesorCode(){
    return this.product["procesorCode"] ? this.product["procesorCode"] : null;
  }

  get tactileFrequency(){
    return this.product["tactileFrequency"] ? this.product["tactileFrequency"] : null;
  }

  get  diagnolSicreen(){
    return this.product["diagnolSicreen"] ? this.product["diagnolSicreen"] : null;
  }

  get  ram(){
    return this.product["ram"] ? this.product["ram"] : null;
  }

  get  ssd(){
    return this.product["ssd"] ? this.product["ssd"] : null;
  }

  get  videoCartType(){
    return this.product["videoCartType"] ? this.product["videoCartType"] : null;
  }

  get hdmi(){
    return this.product["hdmi"] ? this.product["hdmi"] : null;
  }

  get capacityVideoCart(){
    return this.product["capacityVideoCart"] ? this.product["capacityVideoCart"] : null;
  }

  get color(){
    return this.product["color"] ? this.product["color"] : null;
  }

  get optikDrive(){
    return this.product["optikDrive"] ? this.product["optikDrive"] : null;
  }

  get operationSystem(){
    return this.product["operationSystem"] ? this.product["operationSystem"] : null;
  }
  get  chipVideCart(){
    return this.product["chipVideCart"] ? this.product["chipVideCart"] : null;
  }

  get productName(){
    return this.product["name"] ? this.product["name"] : null;
  }

  get count(){
    return this.product["count"] ? this.product["count"] : null;
  }

  get imageUrl(){
    return this.product["imageUrl"] ? this.product["imageUrl"] : null;
  }

  get price(){
    return this.product["price"] ? this.product["price"] : null;
  }
  get about(){
    return this.product["about"] ? this.product["about"] : null;
  }

  get colors(){
    return this.product["colors"] ? this.product["colors"] : null;
  }
  get productInformation(){
    return this.product["productInformation"] ? this.product["productInformation"] : null;
  }

  get id(){
    return this.product["id"] ? this.product["id"] : null;
  }
  ngOnInit(): void {
    this.route.params.pipe(
     tap( params => {
      let id = params.id;
      this.restservice.id = id;
     })
    )
     .subscribe( data => {
      this.Product();
    })

  }
  Product(){
    this.restservice.getProduct()
    .subscribe( data => {
     Object.keys(data).map(key=>({
        type: key,value:data[key]
       }));
      this.product = data;
      this.xngBreadCrumbService.set('@Məhsul Hakkinda',this.product.name)
    })
  }
  updateQuantity(itemProduct: Product, value: string){
   if(value){
    this.productCount = Number(value);
    this.cartService.updateQuantity(itemProduct,this.productCount);
   }
   else{
    this.cartService.updateQuantity(itemProduct,1);
   }


  }

  getCategory(category: Category){
    this.selectedCategory = category;
  }

  addToCart(product: Product,value:string){
    if(value){
    let v = Number(value)
    this.cartService.addNewItem(product,v);
    }
    else this.cartService.addNewItem(product);
    this.router.navigateByUrl('/card');

  }

  saveComment(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.commentRepoService.saveComment(this.commentService)
      .subscribe(response => {
        this.commentService.clearComment();
        this.submitted = false;
        form.reset();
      })

    }
  }

}
