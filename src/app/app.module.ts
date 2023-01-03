import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './ui/categories/categories.component';
import { CategoryComponent } from './ui/categories/category/category.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ProductsComponent } from './ui/products/products.component';
import { ProductComponent } from './ui/products/product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './blog/article/article.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    AboutUsComponent,
    ShopComponent,
    BlogComponent,
    ArticleComponent,
    GalleryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
