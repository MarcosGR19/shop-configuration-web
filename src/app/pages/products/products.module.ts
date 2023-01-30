import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ProductsComponent, CardComponent, ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }
