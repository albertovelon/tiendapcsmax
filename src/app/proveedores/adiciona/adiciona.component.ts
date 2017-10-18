import { Component, OnInit } from '@angular/core';

import { Proveedor } from '../proveedores';
import { ServmemoriaService } from '../servmemoria.service'


@Component({
  selector: 'app-adiciona',
  templateUrl: './adiciona.component.html',
  styleUrls: ['./adiciona.component.css']
})
export class AdicionaComponent implements OnInit {

  public proveedor:Proveedor;
  
    ListaTipo = [
      { value: 'PC ESCRITORIO', label: 'Pc Escritorio' },
      { value: 'PC PORTATIL', label: 'Pc Portatil' },
      { value: 'ACCESORIOS', label: 'Accesorios' },
      { value: 'SOFTWARE', label: 'Software' },
      { value: 'SERV NUBE', label: 'Ser. Nube' },
      { value: 'TELEFONIA', label: 'Telefonia' }    
    ];
    
    
    constructor(private servmemoriaService:ServmemoriaService) { 
  }

  ngOnInit() {
    this.proveedor = new Proveedor();
  }

  onNewClick(){
    alert("Nuevo Proveedor");
    this.proveedor=new Proveedor();
  }
  onSaveCliente(){        
   
   alert("Se ha guardado " + this.proveedor.nombre);
   this.servmemoriaService.proveedoresList.push(this.proveedor);
  }


}
