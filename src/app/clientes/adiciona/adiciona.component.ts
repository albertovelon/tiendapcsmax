import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { ServmemoriaService } from '../servmemoria.service'


@Component({
  selector: 'app-adiciona',
  templateUrl: './adiciona.component.html',
  styleUrls: ['./adiciona.component.css']
})
export class AdicionaComponent implements OnInit {

  public cliente:Cliente;


  
  constructor(private servmemoriaService:ServmemoriaService) { 
  //  this.cliente = new Cliente("Luis Alberto");
 //  this.cliente = new Cliente("", "", "", "");

  }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  onNewClick(){
    alert("Nuevo Cliente");
    this.cliente=new Cliente();
  }
  onSaveCliente(){        
   // console.log(JSON.stringify(this.cliente));
   alert("Se ha guardado " + this.cliente.nombre);
   this.servmemoriaService.clientesList.push(this.cliente);
  }

}
