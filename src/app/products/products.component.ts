import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProductsService } from '../sevices/index'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    debugger
    this.productService.getAll()
   // this.productService.getAll()
  }
  displayedColumns = ['id', 'name', 'unitPrice', 'code', 'units'];
  dataSource = new MatTableDataSource(this.productService.allProducts);
  allProducts = this.productService.allProducts;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
