import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor (private productService:ProductService) {}

  public productList:any[] = [];
  public productListBackup:any[] = [];

  public listMode:boolean=false;

  public inputText?:string='';

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:any)=>{
      this.productList = res;
      for(let product of this.productList){
        product.starPerc = product.stars*100/5 + '%'
      }

      this.productListBackup = [...this.productList];
    });
    
  }

  changeToListMode():void{
    this.listMode=true;
  }

  changeToCatalogMode():void{
    this.listMode=false;
  }

  searchValue(inputText?:any):void{
    this.productList = this.productListBackup.filter(item=> item.name.toLowerCase().includes(inputText?.toLowerCase()));
  }
  
}
