import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Usamos las interfaces creadas
import { Menusroot } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

   public info: Menusroot[] = [];
  
  constructor( private http: HttpClient ) {

   console.log('Ya cargue');
    // Leer el JSON gracias a el modulo http
    this.http.get('assets/data.json')
      .subscribe( (resp: Menusroot[]) => {
         
        this.info = resp['menusroots']
        
        
      });

  }

  
  
}
