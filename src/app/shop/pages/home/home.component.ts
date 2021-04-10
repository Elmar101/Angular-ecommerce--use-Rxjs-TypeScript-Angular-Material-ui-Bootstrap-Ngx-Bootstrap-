import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductRepositoryService } from 'src/app/service/repository-service/productRepo.service';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedCategory!: Category | null;
  public selectedProduct!: Product | null;
  public productsPerPage = 4;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];
 // search = new FormControl("");
  @ViewChild('select') select!: ElementRef;

  constructor(private productRepoService: ProductRepositoryService,private restService:RestService) {}
  ngOnInit(): void {

  }



  ngAfterViewInit(): void {
    setTimeout(() => {
      return fromEvent<Event>(this.select.nativeElement, 'change')
        .pipe(
          delay(700),
          finalize(() => this.changePage(1))
        )
        .subscribe((data) => {
          this.productsPerPage = Number(
            (data.target as HTMLSelectElement).value
          );
        });
    }, 0);
  }

  ngOnDestroy = () => {
    this.productRepoService.unsubs();
  };

  sizeS(value: string) {
    this.productsPerPage = Number(value);
    this.changePage(1);
  }
  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    let takeProducts = index + this.productsPerPage;
      this.selectedProducts = this.productRepoService.getProducts(
        this.selectedCategory
      );
      return this.selectedProducts.slice(index, takeProducts);
  }

  filterName(search:string){
    this.restService.getProductName(search).subscribe(products=> {
      this.selectedProducts = this.productRepoService.getProductsName(products).slice() ;
      //console.log(this.selectedProducts);

    });
   }

  get pageNumbers(): number[] {
    let length = Math.ceil(
      this.productRepoService.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
    return Array(length)
      .fill(0)
      .map((item, index) => index + 1);
  }

  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize() {}

  getCategory(category: Category) {
    this.selectedCategory = category;
  }
}
