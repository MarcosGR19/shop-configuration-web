import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor (private productService:ProductService) {}

  public productList:any[] = [];

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res:any)=>{
      this.productList = res;
    });
  }
}
