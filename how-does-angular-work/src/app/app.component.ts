import { Component } from '@angular/core';
import { Product } from './model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];
  color: string;
  fontSize: string;
  isBordered: boolean;
  classesObj: Object;
  classList: string[];
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

  ngOnInit(){
    this.isBordered = true;
    this.classList= ['blue','round']
    this.toggleBorder();
  }

  productWasSelected(product:Product): void{
    console.log('Clicked: ' + product);
  }

  apply(color: string, fontSize:string): void{
    this.color = color;
    this.fontSize = fontSize;
  }

  toggleBorder(): void{
    this.isBordered = !this.isBordered;
    this.classesObj = {
    bordered: this.isBordered
    }
  }

}
