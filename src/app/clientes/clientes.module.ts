import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { AdicionaComponent } from './adiciona/adiciona.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaComponent, AdicionaComponent, IndexComponent]
})
export class ClientesModule { }
