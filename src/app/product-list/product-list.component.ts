import { Component, Input, OnInit } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  @Input() product: any = [];
  private singleProduct;
  private isAdded;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.isAdded = new Array(this.product.length);
    this.isAdded.fill(false, 0, this.product.length);
    console.log('this.isAdded -> ', this.isAdded, this.product);
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  addToCart(event, productId) {

    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }
    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    this.cartService.addProductToCart(this.singleProduct[0]);
  }
}

