import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'projects' , pathMatch: 'full', redirectTo: '/projects'},
  { path: 'message' , pathMatch: 'full', redirectTo: '/message'},
  { path: 'service' , pathMatch: 'full', redirectTo: '/service'},
  { path: 'settings' , pathMatch: 'full', redirectTo: '/settings'},
  { path: 'users' , pathMatch: 'full', redirectTo: '/users'},
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
