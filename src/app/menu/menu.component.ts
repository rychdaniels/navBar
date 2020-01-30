import { Component, OnInit } from '@angular/core';

// Importamos el servicio
import { InformacionService } from '../services/informacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( public infoMenuService: InformacionService ) { }

  ngOnInit() {
  }

}
