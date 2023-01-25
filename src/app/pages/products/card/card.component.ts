import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() public product?:any;
  
  public starPerc:string = '0%';

  ngOnInit():void{
    this.starPerc = this.product.stars*100/5 + '%'
  }
}
