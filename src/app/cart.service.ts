import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject } from 'rxjs';
import { products } from './products';

@Injectable()
export class CartService {
items = [];
cartItems=[];
public product = new Subject();
  constructor(private http: HttpClient) { }

  addToCart(product) {
    console.log(product)
    this.items.push(product);
    this.product.next(product);    
  }

  getItems() {
     this.product.asObservable();
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.product.next(this.items);
    return this.items;
    
  }
    getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  getProducts(): Observable<any> {
    console.log('this.items :', this.items.length);
    return this.product.asObservable();
  }


  // Add single product to the cart
  addProductToCart(product) {
    this.items.push(product);
    this.product.next(this.items);
  }
}