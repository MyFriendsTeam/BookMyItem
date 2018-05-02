import { Product } from ".";

export class Item {
    public product: Product;
    public quantity: number;
    public get totalAmount(): number {
        return this.product.unitPrice * this.quantity;
    }
    constructor() {
       
    }
   
}
