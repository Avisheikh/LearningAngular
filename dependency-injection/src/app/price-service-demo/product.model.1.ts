import { IPriceService } from "./price-service.interface";
import { PriceService } from "./price.service.1";


export class Product{
    service: IPriceService;
    basePrice: number;

    constructor(service: IPriceService,basePrice: number){
        // this.service = new PriceService(); // <-- create directly ("hardcoded")
        this.service = service;
        this.basePrice = basePrice;
    }

    totalPrice(state: string){
        return this.service.calculatedTotalPrice(this.basePrice, state);
    }
}