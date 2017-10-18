import { Component, OnInit } from '@angular/core';

import { Proveedor } from '../proveedores';
import { ServmemoriaService } from '../servmemoria.service'


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  
 // constructor() { }
  constructor(private servmemoriaService:ServmemoriaService) { }
  
    ngOnInit() {
    }
  
//    getCiudadOptions() {
//      return [
      //"Manizales",
//        "Villamaria"
//      ]
//    };
}
