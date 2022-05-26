import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function skuValidator(control:FormControl): { [s: string]: boolean } {
  if(!control.value.match(/^123/)){
    return {invalidSku: true};
  }
  return null as any;
}

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-with-validations-explicit.component.css']
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {

  myForm:FormGroup;
  // sku:AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':['',Validators.compose([Validators.required, skuValidator])]
    });

    // this.sku = this.myForm.controls['sku'];
   }

  ngOnInit(): void {
  }

  onSubmit(value:string): void {
    console.log('you submitted value: ', value);
  }

}
