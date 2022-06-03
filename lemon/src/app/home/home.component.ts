import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div
      style="position:absolute; left:40%; top:20%;"
      fxLayout="column"
      fxLayoutAlign="center center"
    >
      <span class="mat-display-2">Hello, Abishek!</span><br />
      <button mat-raised-button color="primary" routerLink="/manager">
        Login as Manager
      </button>
    </div>
  `,
  styles: [
    `
      div[fxLLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
