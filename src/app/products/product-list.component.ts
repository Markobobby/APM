import { Component, OnInit, LOCALE_ID } from '@angular/core';

// service
import { ProductService } from './product.service'
// Service for implement euro formating data 
// like euro symbole at the right of price
import { registerLocaleData } from '@angular/common'
import locacleFr from '@angular/common/locales/fr';
registerLocaleData(locacleFr);

import { IProduct } from './product';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [
        { provide: LOCALE_ID , useValue: 'fr-FR' }
    ]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor( private ProductService: ProductService) {
    }

    performFilter(filteredBy: string): IProduct[] {
        filteredBy = filteredBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.ProductService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err 
        });
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;

    }
}