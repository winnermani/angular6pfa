import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../sharedFolder/shared.module';

import { TransferRoutingModule } from './transfer-routing.module';
import { Trns100Component } from './trns100/trns100.component';
import { Trns101Component } from './trns101/trns101.component';

@NgModule({
  imports: [
    CommonModule,
    TransferRoutingModule,
    SharedModule
  ],
  declarations: [Trns100Component, Trns101Component]
})
export class TransferModule { }
