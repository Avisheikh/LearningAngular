// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Product } from './app/price-service-demo/product.model.1';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// describe('Product',() => {
//   let product;

//   beforeEach(() => {
//     product = new Product(11);
//   });


//   describe('price',() => {
//     it("is calculated based on the basePrice and the state", () => {
//       expect(product.totalPrice('FL')).toBe(11.66);
//     });
//   });

// })
