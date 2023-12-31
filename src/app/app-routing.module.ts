import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Nosotros', component: NosotrosComponent },
  {path: 'Proyectos', component: ProyectosComponent},
  {path: 'Contacto', component: ContactoComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
