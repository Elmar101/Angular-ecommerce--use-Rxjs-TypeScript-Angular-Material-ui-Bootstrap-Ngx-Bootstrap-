import { Injectable, OnInit } from "@angular/core";
import { delay } from "rxjs/operators";
import { Category } from "../../model/category";
import { RestService } from "../rest.service";

@Injectable()
export class CategoryRepositoryService implements OnInit{
  private categories: Category[] =[];
  constructor(private restService: RestService){
    this.restService
       .getCategories()
       .pipe(
         delay(2000)
       )
       .subscribe(categories=>  this.categories = categories);
  }
  ngOnInit(): void {

  }

  getCategory(id: number): Category | undefined {
    return this.categories.find( item => item.id === id);
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
