import { Component, OnInit } from '@angular/core';

import { Clientedb } from '../clientedb';

import { ClienteDataService } from '../customer-data-server.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  newData:any
  
    constructor(
      //private servmemoriaService:ServmemoriaService
      private clienteData:ClienteDataService
    ) { }
  
    ngOnInit() {
      this.getdata()
    }
  
      
      getdata(){
        
        this.clienteData.dowloading().subscribe(
          result=> {
            this.newData=result;
            console.log("Success : " +JSON.stringify(this.newData));
            
          },
          err => {
            console.error("Error  numero: "+err);
          }
          
        )
      }
}
