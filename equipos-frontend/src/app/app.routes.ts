import { Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquiposCreateComponent } from './components/equipos-create/equipos-create.component';
import { EquiposEditComponent } from './components/equipos-edit/equipos-edit.component';
import { EquiposDeleteComponent } from './components/equipos-delete/equipos-delete.component';
import { EquiposViewComponent } from './components/equipos-view/equipos-view.component';

export const routes: Routes = [
  { path: 'equipos', component: EquiposComponent },
  { path: 'equipos/create', component: EquiposCreateComponent },
  { path: 'equipos/edit/:id', component: EquiposEditComponent },
  { path: 'equipos/delete/:id', component: EquiposDeleteComponent },
  { path: 'equipos/view/:id', component: EquiposViewComponent },
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
  { path: '**', redirectTo: 'equipos' }
];
