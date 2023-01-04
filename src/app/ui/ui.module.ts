import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoriesComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    ProductsComponent
  ],
  exports: [
    CategoriesComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UIModule { }
