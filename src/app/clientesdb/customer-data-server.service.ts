import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Clientedb } from './clientedb';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ClienteDataService {
  

  clienteList:Array<Clientedb>=[];  

  headers:Headers;
  headersPost:Headers;
  options:RequestOptions;
  
  constructor(
    public http:Http
  ) { }

  
  saveCliente(newCliente:Clientedb){
 
   // let queryString = `{"nombre":"${newCliente.nombre}","direccion":"${newCliente.direccion}",telefono:"${newCliente.telefono}","ciudad":"${newCliente.ciudad}"}`;
    
       this.http.post("http://localhost:62973/cliente/saveCliente", {
      
      "nombre": `${newCliente.nombre}`,
      "direccion": `${newCliente.direccion}`,
      "telefono": `${newCliente.telefono}`,
      "ciudad": `${newCliente.ciudad}`
  })
 
   // this.http.post("http://localhost:62973/cliente/saveCliente", queryString)
    .subscribe(data => {
     console.log("ya grabe")
      this.dowloading();
      
    });
  }

 

  dowloading(){
    
    this.headersPost=new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin':'*'
     
    });
    let opstionspost=new RequestOptions({
      headers: this.headersPost
    })

    return this.http.get('http://localhost:62973/cliente/GetAllClientes',
     opstionspost).map(res =>res.json());
    
  }

  
}