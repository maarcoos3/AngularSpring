import { Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquiposCreateComponent } from './components/equipos-create/equipos-create.component';
import { EquiposEditComponent } from './components/equipos-edit/equipos-edit.component';
import { EquiposDeleteComponent } from './components/equipos-delete/equipos-delete.component';
import { EquiposViewComponent } from './components/equipos-view/equipos-view.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { JugadoresCreateComponent } from './components/jugadores-create/jugadores-create.component';
import { JugadoresEditComponent } from './components/jugadores-edit/jugadores-edit.component';
import { JugadoresDeleteComponent } from './components/jugadores-delete/jugadores-delete.component';

export const routes: Routes = [
  // Rutas para equipos
  { path: 'equipos', component: EquiposComponent },
  { path: 'equipos/create', component: EquiposCreateComponent },
  { path: 'equipos/edit/:id', component: EquiposEditComponent },
  { path: 'equipos/delete/:id', component: EquiposDeleteComponent },
  { path: 'equipos/view/:id', component: EquiposViewComponent },
  // Rutas para jugadores
  { path: 'jugadores', component: JugadoresListComponent },
  { path: 'jugadores/create', component: JugadoresCreateComponent },
  { path: 'jugadores/edit/:id', component: JugadoresEditComponent },
  { path: 'jugadores/delete/:id', component: JugadoresDeleteComponent },
  // Ruta raíz
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
  // Ruta wildcard
  { path: '**', redirectTo: 'equipos' }
];
