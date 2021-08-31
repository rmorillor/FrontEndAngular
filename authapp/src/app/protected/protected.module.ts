import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';

import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PublicadorComponent } from './publicador/publicador.component';
import { AgregaPublicadorComponent } from './agrega-publicador/agrega-publicador.component';
import { EditarPublicadorComponent } from './editar-publicador/editar-publicador.component';
import { CustomMinDirective } from './directivas/custom-min.directive';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    DashboardComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
    PublicadorComponent,
    AgregaPublicadorComponent,
    EditarPublicadorComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class ProtectedModule { }
