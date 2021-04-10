import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { FooterComponent } from './footer/footer.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    CartSummaryComponent,
    CategoryListComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    BreadcrumbModule
  ],
  exports:[
    BreadCrumbComponent,
    CartSummaryComponent,
    CategoryListComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SimpleModule {}
