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
import { OnlyLoggedInUser } from '../med-online-guards/LoggedInGuards';
import { AddPharmaUserComponent } from '../../add-pharma-user/add-pharma-user.component';
import { UpdatePharmaUserComponent } from '../../update-pharma-user/update-pharma-user.component';
import { PharmaUserDetailComponent } from '../../pharma-user-detail/pharma-user-detail.component';
import { MedUsersComponent } from '../../med-users/med-users.component';
import { AddMedUserComponent } from '../../add-med-user/add-med-user.component';
import { MedicineUploadComponent } from '../../medicine-upload/medicine-upload.component';

const pageRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MedAdminDashboardComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'login', component: LoginComponent},
  {path: 'chart', component: CustomerChartComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'view-profile', component: ViewProfileComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'pharmas', component: PharmasComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'pharmas-users/:id', component: PharmaUsersComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'create-pharma', component: AddPharmaComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'edit-pharma/:id', component: UpdatePharmaComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'view-pharma/:id', component: PharmaDetailComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'operations', component: OperationsComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'forgot-password', component: ForgetPasswordComponent},
  {path: 'reset-password/:data', component: ResetPasswordComponent},
  {path: 'add-pharma-user/:id', component: AddPharmaUserComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'edit-pharma-user/:id', component: UpdatePharmaUserComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'pharma-user-detail/:id', component: PharmaUserDetailComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'med-users', component: MedUsersComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'create-med-users', component: AddMedUserComponent, canActivate: [OnlyLoggedInUser]},
  {path: 'import-medicine', component: MedicineUploadComponent, canActivate: [OnlyLoggedInUser]}  
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
