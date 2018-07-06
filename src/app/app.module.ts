import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MadMaterialModule } from './Module/mad-material/mad-material.module';
import { MedOnlineRouterModule } from './Module/med-online-router/med-online-router.module';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [     
    AppComponent, 
    MyNavComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    HttpClientModule,
    MedOnlineRouterModule,        
    MadMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule     
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
