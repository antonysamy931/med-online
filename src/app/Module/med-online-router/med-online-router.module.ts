import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from '../../login/login.component';
import { MadMaterialModule } from '../mad-material/mad-material.module';

const pageRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forRoot(pageRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class MedOnlineRouterModule { }
