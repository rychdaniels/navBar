import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Usamos las interfaces creadas
import { Menusroot } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  // Se guarda la informacion de los menus
  info: Menusroot = {};
  
  constructor( private http: HttpClient ) {

    // Leer el JSON gracias a el modulo http
    this.http.get('assets/data.json')
      .subscribe( (resp: Menusroot) => {
        this.info = resp;
        
        // console.log(this.info.menusroots[0].menus[1].menus[0].nombre);
        
        
      });
  }
}
