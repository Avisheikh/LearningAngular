import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})
export class DemoFormNgModelComponent implements OnInit {

  productName: string;

  constructor() {
    this.productName = "Abishek - The complete story to angular."
   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void{
    console.log('you submitted value: ', value)
  }

}
