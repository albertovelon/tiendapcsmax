import { Injectable } from '@angular/core';
import { Computador } from './computadores'

@Injectable()
export class ServmemoriaService {

  computadorList:Array<Computador>

  constructor() { 
    this.computadorList=[
      {marca: "DELL",
      precioventa: "2200000",
      preciocompra:"1000000",
      tipoproducto: "PC ESCRITRIO",
      utilidad:"1200000"},
      {marca: "GENIUS",
      precioventa: "50000",
      preciocompra:"10000",
      tipoproducto: "MOUSE",
      utilidad:"40000"}]
  }

}
