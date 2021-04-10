import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryRepositoryService } from 'src/app/service/repository-service/categoryRepo.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory!: Category | null;

  @Output() category = new EventEmitter<Category>();
  constructor(private categoryRepoService: CategoryRepositoryService) { }

  ngOnInit(): void {
  }

  get categories(): Category[] {
    return this.categoryRepoService.getCategories();
  }

  changeCategory(newCategory?: Category){
    if(newCategory !=null){
      this.selectedCategory = newCategory;
      this.category.emit(newCategory);
    }else
    this.selectedCategory=null;
  }
}
