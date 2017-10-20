import { Component, OnInit } from '@angular/core';

import { Computador } from '../computadores'
import { ServmemoriaService } from '../servmemoria.service'


@Component({
  selector: 'app-adiciona',
  templateUrl: './adiciona.component.html',
  styleUrls: ['./adiciona.component.css']
})
export class AdicionaComponent implements OnInit {

  public computador:Computador;
  
    
    constructor(private servmemoriaService:ServmemoriaService) { 
 
    }
  
    ngOnInit() {
      this.computador = new Computador();
    }
  
    onNewClick(){
      alert("Nuevo Computador");
      this.computador=new Computador();
    }
    onSaveCliente(){        
     // console.log(JSON.stringify(this.cliente));
     alert("Se ha guardado " + this.computador.marca);
     this.servmemoriaService.computadorList.push(this.computador);
    }
  

}
