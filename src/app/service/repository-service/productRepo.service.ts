import { Injectable, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { Category } from "src/app/model/category";
import { Product } from "../../model/product";
import { RestService } from "../rest.service";

@Injectable()
export class ProductRepositoryService implements OnInit{
  private loading: boolean = true;
  private products: Product[] =[];
  sub: Subscription | undefined;

  constructor(private restService: RestService){
    this.sub = this.restService
       .getProducts()
       .pipe(
         tap(data=> this.loading = false)
       )
       .subscribe(products=>  this.products = products);
  }
  ngOnInit(): void {

  }

  getProduct(id: number):Product | undefined {
    return this.products.find( product => product.id === id);
  }

  getProducts(category: Category | null): Product[] {
    if(category){
     return this.products.filter(product=>product.category == category.name);
    }
    return this.products
  }

  getProductsName(product: Product | null): Product[] {
    if(product){
     return this.products.filter(product=>product.name == product.name);
    }
    return this.products
  }

  unsubs = () => {
      this.sub && this.sub.unsubscribe()
  }
}
