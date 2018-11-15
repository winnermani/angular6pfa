import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SharedModule } from './sharedFolder/shared.module';
import { LoginComponent } from './prelogin/login/login.component';
import { SiderComponent } from './prelogin/sider/sider.component';
import { TransferRoutingModule } from './postLogin/transfer/transfer-routing.module';
import { MobileRoutingModule} from './postLogin/mobile/mobile-routing.module';

const appRoutes: Routes=[
  {path:'', redirectTo: 'logintest',pathMatch: 'full'},
  {path:'logintest', component:LoginComponent},
  {path:'sidermenu', component:SiderComponent},
  {path:'transfer',loadChildren:'../postLogin/transfer.module#TransferModule'},
  {path:'mobile', loadChildren:'../postLogin/mobile.module#MobileModule'}
  
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransferRoutingModule,
    MobileRoutingModule,
    RouterModule.forRoot(appRoutes,
    {
     preloadingStrategy: PreloadAllModules

    })
  ],
  declarations: []
})
export class AppRoutingModule { }


