import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  // Se guarda la informacion de los menus
  info: any = {};
  // nombre: string = '';
  // nombre2: string = '';
  constructor( private http: HttpClient ) {
    // Leer el JSON gracias a el modulo http
    this.http.get('assets/data.json')
      .subscribe( resp => {
        this.info = resp;
        // this.nombre = this.info['menusroots'][0].nombre;
        // this.nombre2 = this.info['menusroots'][1].nombre;
        // console.log(this.nombre);

      });
  }
}
