import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceModule } from "../service/service.module";

import { ShopComponent } from "./shop.component";

import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { registerLocaleData } from "@angular/common";
import LocalAz from "@angular/common/locales/az-Latn";
import LocalAzExtra from "@angular/common/locales/extra/az-Latn";

import { FlexLayoutModule } from '@angular/flex-layout';

import { BreadcrumbModule } from "xng-breadcrumb";
//import { CarouselModule } from 'ngx-bootstrap';



import { HomeComponent } from "./pages/home/home.component";
import { CartFullDetailComponent } from './pages/cart-full-detail/cart-full-detail.component';
import { CartDetailComponent } from "./pages/cart-detail/cart-detail.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";



import { SimpleModule } from "./simple-components/simple.module";
import { SidenavListComponent } from "./pages/sidenav-list/sidenav-list.component";
import { AppRoutingModule } from "../app-routing.module";
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

registerLocaleData(LocalAz,"az",LocalAzExtra);

@NgModule({
  declarations:[ShopComponent,CartDetailComponent, CheckoutComponent, CartFullDetailComponent, HomeComponent,SidenavListComponent, ContactComponent, ServicesComponent, LoginComponent, RegisterComponent],
  imports:[
    ServiceModule,
    BrowserModule ,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    BreadcrumbModule,
    SimpleModule
    //CarouselModule
  ]
  //exports:[ ShopComponent, CartDetailComponent, CheckoutComponent ]
})
export class ShopModule {}
