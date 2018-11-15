import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Trns100Component } from './trns100/trns100.component';
import { Trns101Component } from './trns101/trns101.component';

const routes: Routes = [
  {path:'transfer', component:Trns100Component},
  {path:'trns101',component:Trns101Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }

