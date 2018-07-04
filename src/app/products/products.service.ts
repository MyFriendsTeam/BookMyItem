import { Injectable } from '@angular/core';
import { Product } from '../models';
import { UserService } from '../sevices';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService {
  private groupSource = new BehaviorSubject<Product[]>([]);
  products: Observable<Product[]> = this.groupSource.asObservable();
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
  public get allProducts() {
    return this.products;
  }
  public set allProducts(products) {
    this.products = products
  }

}
