import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';  

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {

  myForm: FormGroup;  

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku':['ABishek']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form:any): void{
    console.log("The value: ", form);
  }

}
