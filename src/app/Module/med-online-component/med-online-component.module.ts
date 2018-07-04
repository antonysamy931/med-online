import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { DashboardComponent } from '../../dashboard/dashboard.component'

@NgModule({
  imports: [
    CommonModule,    
    LoginComponent,
    DashboardComponent
  ],
  exports: [    
    LoginComponent,
    DashboardComponent
  ],
  declarations: []
})
export class MedOnlineComponentModule { }
