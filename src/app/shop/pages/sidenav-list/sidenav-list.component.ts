import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryRepositoryService } from 'src/app/service/repository-service/categoryRepo.service';
import { ProductRepositoryService } from 'src/app/service/repository-service/productRepo.service';

@Component({
  selector: 'sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  panelOpenState = false;
  public selectedCategory!: Category | null;

  @Output() SidenavClose = new EventEmitter();

  constructor(private categoryRepoService: CategoryRepositoryService,
    private productRepoService: ProductRepositoryService) { }

  ngOnInit(): void {
  }

  onSidenavClose = ()=> {
    this.SidenavClose.emit();
  }

  get categories(): Category[] {
    return this.categoryRepoService.getCategories();
  }

  changeCategory(newCategory?: Category){
    if(newCategory !=null){
      this.selectedCategory = newCategory;
      this.productRepoService
      .getProducts(this.selectedCategory);
    }
    this.selectedCategory=null;
  }

}
