import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CompareValidatorModule } from 'angular-compare-validator';

import { MadMaterialModule } from './Module/mad-material/mad-material.module';
import { MedOnlineRouterModule } from './Module/med-online-router/med-online-router.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedAdminDashboardComponent } from './med-admin-dashboard/med-admin-dashboard.component';
import { MedOnlineNavbarComponent } from './med-online-navbar/med-online-navbar.component';
import { CustomerChartComponent } from './charts/customer-chart/customer-chart.component';
import { SalesChartComponent } from './charts/sales-chart/sales-chart.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddPharmaComponent } from './add-pharma/add-pharma.component';
import { UpdatePharmaComponent } from './update-pharma/update-pharma.component';
import { PharmasComponent } from './pharmas/pharmas.component';
import { PharmaUsersComponent } from './pharma-users/pharma-users.component';
import { PharmaDetailComponent } from './pharma-detail/pharma-detail.component';
import { OperationsComponent } from './operations/operations.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthInterceptor } from './Module/Helper/auth-interceptor';
import { ForgotMessageComponent } from './forgot-message/forgot-message.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { OnlyLoggedInUser } from './Module/med-online-guards/LoggedInGuards';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';
import { AddPharmaUserComponent } from './add-pharma-user/add-pharma-user.component';
import { UpdatePharmaUserComponent } from './update-pharma-user/update-pharma-user.component';
import { PharmaUserDetailComponent } from './pharma-user-detail/pharma-user-detail.component';
import { MedUsersComponent } from './med-users/med-users.component';
import { AddMedUserComponent } from './add-med-user/add-med-user.component';

@NgModule({
  entryComponents:[
    ForgetPasswordComponent,
    ForgotMessageComponent,
    AlertMessageComponent,
    ConfirmBoxComponent
  ],
  declarations: [     
    AppComponent,     
    LoginComponent,
    DashboardComponent,
    MedAdminDashboardComponent,
    MedOnlineNavbarComponent,
    CustomerChartComponent,
    SalesChartComponent,
    ViewProfileComponent,
    ChangePasswordComponent,
    AddPharmaComponent,
    UpdatePharmaComponent,
    PharmasComponent,
    PharmaUsersComponent,
    PharmaDetailComponent,
    OperationsComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ForgotMessageComponent,
    AlertMessageComponent,
    ConfirmBoxComponent,
    AddPharmaUserComponent,
    UpdatePharmaUserComponent,
    PharmaUserDetailComponent,
    MedUsersComponent,
    AddMedUserComponent    
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    HttpClientModule,
    MedOnlineRouterModule,        
    MadMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ChartsModule,
    CompareValidatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  OnlyLoggedInUser],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

//https://valor-software.com/ng2-charts/