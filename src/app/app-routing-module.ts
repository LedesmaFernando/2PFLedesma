import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './featured/auth/login/login';
import { Dashboard } from './featured/dashboard/dashboard';


const routes: Routes = [

{ 
  path: '', 
  component: Dashboard
},
{ 
  path: 'home', 
  redirectTo: '', 
  pathMatch: 'full' 
},
{
  path: 'login',
  component:Login,
},
{
  path: 'dashboard',
  component:Dashboard,
  loadChildren: () => import('./featured/dashboard/dashboard-module').then((m) => m.DashboardModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
