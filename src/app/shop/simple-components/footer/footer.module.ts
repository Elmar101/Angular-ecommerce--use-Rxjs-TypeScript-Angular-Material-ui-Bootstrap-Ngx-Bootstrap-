import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupContactComponent } from '../popup-contact/popup-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ServiceModule } from 'src/app/service/service.module';



@NgModule({
  declarations: [PopupContactComponent],
  entryComponents:[PopupContactComponent],
  imports: [
    ServiceModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers:[],
  exports:[PopupContactComponent]
})
export class FooterModule { }
