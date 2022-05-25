import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-image',
  template: ` 
  <img class="product-image" [src]="product.imageUrl">
  <!-- <img src="{{ product.imageUrl }}">  do same as above line-->
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product:Product;
  @HostBinding('attr.class') cssClass = ' ui small image ';

  constructor() { }

  ngOnInit(): void {
  }

}
