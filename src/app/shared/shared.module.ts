import { ReactiveFormsModule } from '@angular/forms';
import { StarsComponent } from './components/stars/stars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from './components/form-item/form-item.component';



@NgModule({
  declarations: [StarsComponent, FormItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [StarsComponent, FormItemComponent]
})
export class SharedModule { }
