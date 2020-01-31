import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Usamos las interfaces creadas
import { RootObject, Menusroot, Menu  } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  // Se guarda la informacion de los menus
  info: RootObject = {};
  infoMenuRoot: Menusroot = {};
  menu: Menu = {}; 
  
 
  constructor( private http: HttpClient ) {

    // Leer el JSON gracias a el modulo http
    this.http.get('assets/data.json')
      .subscribe( (resp: RootObject) => {
        this.info = resp;
              
      
        console.log(this.info);

      });
  }
}
