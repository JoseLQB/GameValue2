//ENRUTADOR
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GamelistComponent} from './components/gamelist/gamelist.component'
import {GameformComponent} from './components/gameform/gameform.component'

//aquí se definen las rutas
const routes: Routes = [
  {
    path:'',
    redirectTo:'/games',
    pathMatch: 'full'
  },
  {
    //esta ruta renderiza un componente
    path: 'games',
    component: GamelistComponent
  },
  {
    path:'games/add',
    component: GameformComponent
  },
  {
    path:'games/edit/:id',
    component: GameformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
