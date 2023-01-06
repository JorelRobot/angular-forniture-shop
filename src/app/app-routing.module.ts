import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { EntryComponent } from './blog/entry/entry.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'entry', component:EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
