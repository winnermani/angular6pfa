import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [

  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
   
  ],
})

export class SharedModule { }