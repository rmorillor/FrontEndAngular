import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaPublicadorComponent } from './agrega-publicador/agrega-publicador.component';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { PublicadorComponent } from './publicador/publicador.component';
import { EditarPublicadorComponent } from './editar-publicador/editar-publicador.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ListadoComponent
      },
      {
        path: 'add',
        component: AgregarComponent
      },
      {
        path: 'edit/:id',
        component: AgregarComponent
      },
      {
        path: 'search',
        component: BuscarComponent
      },
      {
        path: 'publisher',
        component: PublicadorComponent
      },
      {
        path: 'addPublisher',
        component: AgregaPublicadorComponent
      },
      {
        path: 'editPublisher/:codigo',
        component: EditarPublicadorComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
