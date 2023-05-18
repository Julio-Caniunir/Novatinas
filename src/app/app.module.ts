import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//  Inicio Carga scripts
import { CargarScriptService } from './cargar-script.service';
// Fin Carga Scripts


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
