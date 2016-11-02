import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent }  from './app.component';
import Productlistcomponent = require("./Products/product-list.component");
import Productfilterpipe = require("./Products/product.filter.pipe");
import StarComponent = require("./shared/star.component");
import {ProductService} from "./Products/product.service";



@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [AppComponent, Productlistcomponent.ProductListComponent, Productfilterpipe.ProductFilterPipe,StarComponent.StarComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]

})
export class AppModule { }
