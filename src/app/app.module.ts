import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';

import { AdicionaComponent as AdicionaComponent} from './proveedores/adiciona/adiciona.component';

import { IndexComponent } from './clientes/index/index.component';
import { IndexComponentprov } from './proveedores/index/index.componentprov';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
MdAutocompleteModule,
MdButtonModule,
MdButtonToggleModule,
MdCardModule,
MdCheckboxModule,
MdChipsModule,
// MdCoreModule,
MdDatepickerModule,
MdDialogModule,
MdExpansionModule,
MdGridListModule,
MdIconModule,
MdInputModule,
MdListModule,
MdMenuModule,
MdNativeDateModule,
MdPaginatorModule,
MdProgressBarModule,
MdProgressSpinnerModule,
MdRadioModule,
MdRippleModule,
MdSelectModule,
MdSidenavModule,
MdSliderModule,
MdSlideToggleModule,
MdSnackBarModule,
MdSortModule,
MdTableModule,
MdTabsModule,
MdToolbarModule,
MdTooltipModule,
} from '@angular/material';



const appRoutes : Routes = [
  { path: 'clientes/index', component: IndexComponent },
  //{ path: 'proveedores/adiciona', component: AdicionaComponent }
  { path: 'proveedores/index', component: IndexComponentprov }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientesModule,
    ProveedoresModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
   // MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
