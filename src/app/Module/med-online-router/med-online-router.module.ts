import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { MedAdminDashboardComponent } from '../../med-admin-dashboard/med-admin-dashboard.component';
import { CustomerChartComponent } from '../../charts/customer-chart/customer-chart.component';

const pageRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MedAdminDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chart', component: CustomerChartComponent}
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
