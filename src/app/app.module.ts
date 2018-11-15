import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './sharedFolder/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './prelogin/login/login.component';
import { SiderComponent } from './prelogin/sider/sider.component';
import { TableService} from './prelogin/table.service';
import { TransferModule} from './postLogin/transfer/transfer.module';
import { MobileModule} from './postLogin/mobile/mobile.module';
import { TestDirective } from './test.directive';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiderComponent,
    TestDirective,
   
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    TransferModule,
    MobileModule,
    NgxDatatableModule
    
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }