import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductsService } from '../../sevices';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  public product: Product = new Product("", '', '', '', 0, 0);
  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }
  onSubmitProduct() {
    this.productService.addProduct(this.product)
    this.product = new Product("", '', '', '', 0, 0);
  }

}
