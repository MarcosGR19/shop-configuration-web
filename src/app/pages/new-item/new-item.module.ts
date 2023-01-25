import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewItemRoutingModule } from './new-item-routing.module';
import { NewItemComponent } from './new-item.component';


@NgModule({
  declarations: [
    NewItemComponent
  ],
  imports: [
    CommonModule,
    NewItemRoutingModule,
    SharedModule
  ]
})
export class NewItemModule { }
