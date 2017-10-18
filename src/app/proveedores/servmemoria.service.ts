import { Injectable } from '@angular/core';
import { Proveedor } from './proveedores'

@Injectable()
export class ServmemoriaService {

  proveedoresList:Array<Proveedor>

  constructor() { 
    this.proveedoresList=[
      {nombre: "DELL",
      direccion: "New Orleans",
      telefono:"8458977777",
      contacto: "Drew",
      tipoproducto:"Pc Portatiles"},
      {nombre: "LENOVO",
      direccion: "L.A",
      telefono:"39657423333",
      contacto: "Rivers",
      tipoproducto:"Pc Escritorio"},
      {nombre: "Microsoft",
      direccion: "Silicon Valley",
      telefono:"9565556556555",
      contacto: "Bledsoe",
      tipoproducto:"Software"}]
  }

}
