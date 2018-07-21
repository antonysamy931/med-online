import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { MedAdminDashboardComponent } from '../../med-admin-dashboard/med-admin-dashboard.component';
import { CustomerChartComponent } from '../../charts/customer-chart/customer-chart.component';
import { ViewProfileComponent } from '../../view-profile/view-profile.component';
import { ChangePasswordComponent } from '../../change-password/change-password.component';
import { PharmasComponent } from '../../pharmas/pharmas.component';
import { PharmaUsersComponent } from '../../pharma-users/pharma-users.component';
import { AddPharmaComponent } from '../../add-pharma/add-pharma.component';
import { UpdatePharmaComponent } from '../../update-pharma/update-pharma.component';
import { PharmaDetailComponent } from '../../pharma-detail/pharma-detail.component';
import { OperationsComponent } from '../../operations/operations.component';
import { ForgetPasswordComponent } from '../../forget-password/forget-password.component';
import { ResetPasswordComponent } from '../../reset-password/reset-password.component';

const pageRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MedAdminDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chart', component: CustomerChartComponent},
  {path: 'view-profile', component: ViewProfileComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'pharmas', component: PharmasComponent},
  {path: 'pharmas-users', component: PharmaUsersComponent},
  {path: 'create-pharma', component: AddPharmaComponent},
  {path: 'edit-pharma/:id', component: UpdatePharmaComponent},
  {path: 'view-pharma/:id', component: PharmaDetailComponent},
  {path: 'operations', component: OperationsComponent},
  {path: 'forgot-password', component: ForgetPasswordComponent},
  {path: 'reset-password/:data', component: ResetPasswordComponent}
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
