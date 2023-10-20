

// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     initialNavigation: 'enabledBlocking'
// })],
//   exports: [RouterModule]
// })


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from '../modules/todos/todos.component';

const routes: Routes = [
  { 
        path: '', 
        component: TodosComponent 
  },
  {
        path: '**', 
        component: TodosComponent
  }
 
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
