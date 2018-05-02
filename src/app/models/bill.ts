import { Item } from "./item";
import { Guid } from "../utility/guid";
import { Customer } from "./customer";

export class Bill {
    public id: Guid;
    public transactionId: number;
    public transactionType: string;
    public customer: Customer;
    public biller: string;
    public items: Item[];
    private totalBill: number;
    constructor(items: Item[]) {
        this.items = items
    }
    addItem(item: Item) {
        this.items.push(item);
    }
    removeItem(productId): void {

    }
    public get itemisedBill(): number {
        let amount = 0;
        this.items.forEach(item => {
            amount = amount + item.totalAmount;
        })
        return amount;
    }
}
