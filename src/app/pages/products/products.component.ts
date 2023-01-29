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

  public listMode:boolean=false;

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res:any)=>{
      this.productList = res;
      for(let product of this.productList){
        product.starPerc = product.stars*100/5 + '%'
      }
      console.log(this.productList)
    });
  }

  changeToListMode():void{
    this.listMode=true;
  }

  changeToCatalogMode():void{
    this.listMode=false;
  }
}
