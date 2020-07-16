import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public cartProductCount: number = 0;
  constructor( private cart:CartService) { }

  ngOnInit() {
    this.cart.getProducts().subscribe(data => {
      console.log(data)
      this.cartProductCount = data.length;
    })
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/