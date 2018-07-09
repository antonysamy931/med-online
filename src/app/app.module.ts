import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MadMaterialModule } from './Module/mad-material/mad-material.module';
import { MedOnlineRouterModule } from './Module/med-online-router/med-online-router.module';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedAdminDashboardComponent } from './med-admin-dashboard/med-admin-dashboard.component';
import { MedOnlineNavbarComponent } from './med-online-navbar/med-online-navbar.component';
import { CustomerChartComponent } from './charts/customer-chart/customer-chart.component';
import { SalesChartComponent } from './charts/sales-chart/sales-chart.component';

@NgModule({
  declarations: [     
    AppComponent, 
    MyNavComponent,
    LoginComponent,
    DashboardComponent,
    MedAdminDashboardComponent,
    MedOnlineNavbarComponent,
    CustomerChartComponent,
    SalesChartComponent
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

//https://valor-software.com/ng2-charts/