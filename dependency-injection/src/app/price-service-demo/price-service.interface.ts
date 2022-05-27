export interface IPriceService{
    calculatedTotalPrice(basePrice: number, state:string):number;
}