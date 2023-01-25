import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:()=> import('./pages/home/home.module').then(m=>m.HomeModule)},
  {path:'productos', loadChildren:()=> import('./pages/products/products.module').then(m=>m.ProductsModule)},
  {path:'new-item', loadChildren:()=> import('./pages/new-item/new-item.module').then(m=>m.NewItemModule)},
  {path:'edit-item/:id', loadChildren:()=> import('./pages/edit-item/edit-item.module').then(m=>m.EditItemModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
