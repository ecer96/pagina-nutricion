import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'testimonios',component:TestimoniosComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
