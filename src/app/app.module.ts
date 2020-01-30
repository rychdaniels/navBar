import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

// Se importa el archivo de Servicios para leer el archivo data.json
import { InformacionService } from './services/informacion.service';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],

  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
