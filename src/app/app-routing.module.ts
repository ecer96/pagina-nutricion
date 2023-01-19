import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';


const routes: Routes = [
  {path:' ${procces.env.PUBLIC_URL}/home',component:HomeComponent},
  {path:'${procces.env.PUBLIC_URL}/blog',component:BlogComponent},
  {path:'${procces.env.PUBLIC_URL}/contacto',component:ContactoComponent},
  {path:'${procces.env.PUBLIC_URL}/testimonios',component:TestimoniosComponent},
  {path:'${procces.env.PUBLIC_URL}/**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
