import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-adiciona',
  templateUrl: './adiciona.component.html',
  styleUrls: ['./adiciona.component.css']
})
export class AdicionaComponent implements OnInit {

  public cliente:Cliente;

  
  constructor() { 
  //  this.cliente = new Cliente("Luis Alberto");
    this.cliente = new Cliente("", "", "", "");
  }

  ngOnInit() {
  }

}
