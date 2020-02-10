import { Component, OnInit } from '@angular/core';

// Importamos el servicio
import { InformacionService } from '../services/informacion.service';
import { Menusroot } from '../interfaces/menu.interface';

import data from '../../assets/data.json';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  // Se guarda la informacion de los menus
  public info: Menusroot[]= data.menusroots;
   
  
  constructor( public infoMenuService: InformacionService ) { 
    // this.info = infoMenuService.info;
    
    
   }

  ngOnInit() {
  }

}


