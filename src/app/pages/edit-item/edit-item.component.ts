import { ProductService } from './../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  public id!:number;
  public product!:any;

  constructor (private route:ActivatedRoute, private productService:ProductService) {}

  ngOnInit():void{
    this.route.paramMap.subscribe(params=> {
      this.id = Number(params.get('id'));
    })

    this.productService.getProduct(this.id).subscribe(res=>{
      this.product = res;
    });
  }
}
