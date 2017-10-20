import { Component, OnInit } from '@angular/core';

import { Clientedb } from '../clientedb';

import { ClienteDataService } from '../customer-data-server.service'

@Component({
  selector: 'app-adiciona',
  templateUrl: './adiciona.component.html',
  styleUrls: ['./adiciona.component.css']
})
export class AdicionaComponent implements OnInit {

  public cliente:Clientedb;
  clienteList = [];

  ListaCiudad = [
    { value: 'MANIZALES', label: 'Manizales' },
    { value: 'VILLAMARIA', label: 'Villamaria' },
    { value: 'SALAMINA', label: 'SALAMINA' },
    { value: 'CALI', label: 'Cali' },
    { value: 'MEDELLIN', label: 'Medellin' },
    { value: 'BOYACA', label: 'Boyaca' }    
  ];
  
  constructor(private clienteDataService: ClienteDataService){
//  constructor(private servmemoriaService:ServmemoriaService) { 
  //  this.cliente = new Cliente("Luis Alberto");
 //  this.cliente = new Cliente("", "", "", "");

  }

  ngOnInit() {
    this.cliente = new Clientedb();
  }

  onNewClick(){
    alert("Nuevo Cliente");
    this.cliente=new Clientedb();
  }
  onSaveCliente(){   
   // console.log(JSON.stringify(this.cliente));
   alert("Se ha guardado " + this.cliente.nombre);
  // this.servmemoriaService.clientesList.push(this.cliente);
  
    this.clienteDataService.saveCliente(this.cliente);
  }

}
