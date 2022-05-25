import { Component } from '@angular/core';
import { Product } from './model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];
  //product: Product;

  // constructor(){
  //   this.product = new Product(
  //     "NICEHAT",
  //     "A Nice Black Hat",
  //     "/resources/images/products/black-hat.jpg",
  //     ["Men", "Accessories", "Hats"],
  //     29.99
  //   );
  // }

  constructor(){
  
    this.products = [

      new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/assests/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),

      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assests/images/products/blue-shoes.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),

      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assests/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99)
    ];
  }

  productWasSelected(product:Product): void{
    console.log('Clicked: ' + product);
  }

}
