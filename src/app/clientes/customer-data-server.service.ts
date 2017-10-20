import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ClienteDataService {
  

  clienteList:Array<Cliente>=[];  

  headers:Headers;
  headersPost:Headers;
  options:RequestOptions;
  
  constructor(
    public http:Http
  ) { }

  //CargarChivas(){
  //  this.http.get("http://localhost:18171/chiva/GetAllChivas")
  //  .subscribe(data =>{
   //   this.chivasList = data as Array<Chiva>; 
    //});
 // }

  saveCliente(newCliente:Cliente){
 
   // let queryString = `{"nombre":"${newCliente.nombre}","direccion":"${newCliente.direccion}",telefono:"${newCliente.telefono}","ciudad":"${newCliente.ciudad}"}`;
    
       this.http.post("http://localhost:62973/cliente/saveCliente", {
      
      "nombre": `${newCliente.nombre}`,
      "direccion": `${newCliente.direccion}`,
      "telefono": `${newCliente.telefono}`,
      "ciudad": `${newCliente.ciudad}`
  })
 
   // this.http.post("http://localhost:62973/cliente/saveCliente", queryString)
    .subscribe(data => {
     console.log("bueno")
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