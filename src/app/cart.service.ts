import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor() {
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeFromCart(product) {
    this.items.splice(this.items.indexOf(product), 1);
  }

  clearCart() {
    this.items.splice(0);
  }
}
