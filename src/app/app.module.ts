import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedOnlineRouterModule } from './Module/med-online-router/med-online-router.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    DashboardComponent       
  ],
  imports: [
    BrowserModule,    
    MedOnlineRouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
