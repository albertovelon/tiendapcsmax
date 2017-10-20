import { Component, OnInit } from '@angular/core';

import { Computador } from '../computadores';
import { ServmemoriaService } from '../servmemoria.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private servmemoriaService:ServmemoriaService) { }

  ngOnInit() {
  }

}
