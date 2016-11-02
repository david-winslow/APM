import {Component,OnInit} from '@angular/core';
import {ProductService}  from "./product.service";
@Component(
{
    moduleId: module.id,
    selector: "pm-products",
    templateUrl: "product-list.component.html",
    styleUrls: ["product-list.component.css"]
})
export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) {}

    imageWidth: number = 50;
    imageHeight: number = 2;
    pageTitle: string = "Product list";
    showImage: boolean = true;
    listFilter: string = "";

   

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    products = this._productService.getProducts();

    ngOnInit(): void {
        console.debug("started the system up!");
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product List: ${message}`;

    }
}
