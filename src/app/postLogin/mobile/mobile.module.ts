import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../sharedFolder/shared.module';

import { MobileRoutingModule } from './mobile-routing.module';
import { Mobile200Component } from './mobile200/mobile200.component';
import { NumberComponent } from './mobile200/number/number.component';

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule,
    SharedModule
  ],
  declarations: [Mobile200Component, NumberComponent]
})
export class MobileModule { }
