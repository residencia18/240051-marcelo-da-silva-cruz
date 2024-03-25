// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trabalho1Component } from './trabalho1/trabalho1.component';


const routes: Routes = [
  { path: 'trabalho1', component: Trabalho1Component },  
  { path: '', redirectTo: '/trabalho1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
