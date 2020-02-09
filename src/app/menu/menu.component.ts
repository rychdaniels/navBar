import { Component, OnInit } from '@angular/core';

// Importamos el servicio
import { InformacionService } from '../services/informacion.service';
import { Menusroot } from '../interfaces/menu.interface';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  // Se guarda la informacion de los menus
  public info: Menusroot[]= [
    {
       "id":1,
       "nombre":"Menu Root 1",
       "url":"",
       "menus":[
          {
             "id":2,
             "nombre":"Menu Hijo 1.1",
             "url":"hijo1.html",
             "menus":[
                {
                   "id":7,
                   "nombre":"Menu Hijo 2.1.1",
                   "url":"hijo211.html"
                },
                {
                   "id":7,
                   "nombre":"Menu Hijo 2.1.2",
                   "url":"hijo211.html"
                },
                {
                   "id":7,
                   "nombre":"Menu Hijo 2.1.3",
                   "url":"hijo211.html",
                   "menus":[
                     {
                        "id":7,
                        "nombre":"Menu Hijo 3.1.2",
                        "url":"hijo211.html"
                     }
                  ]
                }
             ]
          },
          {
             "id":3,
             "nombre":"Menu Hijo 2.1",
             "url":"",
             "menus":[
                {
                   "id":7,
                   "nombre":"Menu Hijo 2.1.1",
                   "url":"hijo211.html"
                },
                {
                   "id":7,
                   "nombre":"Menu Hijo 2.1.2",
                   "url":"hijo211.html"
                },
                {
                   "id":7,
                   "nombre":"Menu Hijo 2.1.3",
                   "url":"hijo211.html"
                   
                }
             ]
          }
       ]
    },
    {
       "id":4,
       "nombre":"Menu Root 2",
       "url":"",
       "menus":[
          {
             "id":5,
             "nombre":"Menu Hijo 2.1",
             "url":"hijo1.html"
          },
          {
             "id":6,
             "nombre":"Menu Hijo 2.2",
             "url":"hijo2.html"
          }
       ]
    }
 ];
   
  
  constructor( public infoMenuService: InformacionService ) { 
    // this.info = infoMenuService.info;
    
    
   }

  ngOnInit() {
  }

}


