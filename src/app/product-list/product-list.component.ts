import { Component, OnInit } from "@angular/core";
import { products } from '../products';

@Component({
    selector: `app-product-list`,
    templateUrl: `./product-list.component.html`,
    styleUrls: [`./product-list.component.scss`]
})

export class ProductListComponent {
    products = products;

    constructor() { }

    share() {
        window.alert(`The prodcut has been shared`);
    }

    onNotify() {
        window.alert(`You will bew notified`);
    }
}