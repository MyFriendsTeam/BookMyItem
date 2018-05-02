import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable()
export class ProductsService {
  public products: Product[];

  constructor() { }
  addProduct(product: Product): void {
    //http service and then push in service
    this.products.push(product);
  }

  removeProduct(id): void {
    this.products.pop();
  }
  getAll(): Product[] {
    return this.products;
  }

}
