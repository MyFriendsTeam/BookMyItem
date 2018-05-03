import { Injectable } from '@angular/core';
import { Product } from '../models';
import { UserService } from '../sevices';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductsService {
  products: Product[] = [];
  constructor(private userService: UserService, private http: HttpClient) {
    this.addSampleData()
  }

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
  addSampleData() {
    this.products.push(new Product(1, 'pro1', '11', 12, 12, 12))
    this.products.push(new Product(1, 'pro1', '11', 12, 12, 12))
    this.products.push(new Product(1, 'pro1', '11', 12, 12, 12))
    this.products.push(new Product(1, 'pro1', '11', 12, 12, 12))
    this.products.push(new Product(1, 'pro1', '11', 12, 12, 12))
  }

}
