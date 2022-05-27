import { IPriceService } from "./price-service.interface";


export class MockPriceService implements IPriceService{
    calculatedTotalPrice(basePrice: number, state: string): number {
        if(state === 'FL') {
            return basePrice + 0.66;
        }
        return basePrice;
    }
}