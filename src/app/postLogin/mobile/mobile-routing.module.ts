import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mobile200Component } from './mobile200/mobile200.component';
import { NumberComponent } from './mobile200/number/number.component';

const routes: Routes = [
  {path:'mobile', component:Mobile200Component,
   children:[
     {path:'number', component:NumberComponent}
      
   ]


   }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
