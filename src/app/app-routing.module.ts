import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from 'src/app/landing/landing.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  {path:'landing',component:LandingComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/landing' } // catch any unfound routes and redirect to landing page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
