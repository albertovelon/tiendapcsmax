import { Injectable } from '@angular/core';
import { Cliente } from './cliente'

@Injectable()
export class ServmemoriaService {

  clientesList:Array<Cliente>

  constructor() { 
    this.clientesList=[
      {nombre: "Alberto",
      direccion: "VillaPilar",
      telefono:"77777",
      ciudad: "Manizales"},
      {nombre: "Cristian",
      direccion: "Estrella",
      telefono:"33333",
      ciudad: "Medellin"},
      {nombre: "Luis",
      direccion: "Fatima",
      telefono:"555555",
      ciudad: "Cali"}]
  }

}
