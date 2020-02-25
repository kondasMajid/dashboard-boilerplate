import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { LoginAdminComponent } from './components/accounts/admin/login-admin/login-admin.component';
import { SignupAdminComponent } from './components/accounts/admin/signup-admin/signup-admin.component';
import { HeadersComponent } from './components/headers/headers.component';
import { AppRoutingModule } from './app-routing';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/dashboards/admin-dashboard/admin-dashboard.component';

import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { SideBarComponent } from './components/dashboards/admin-dashboard/side-bar/side-bar.component';
import { LoginAdminComponent } from './components/accounts/admin/login-admin/login-admin.component';
import {  AdminRoutingModule } from './components/dashboards/admin-dashboard/admin-routing.module';
// import { AdminDashboardModule } from './components/dashboards/admin-dashboard/admin-dashboard.module';
// import { AdminDashboardModule } from './components/dashboards/admin-dashboard/admin-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupAdminComponent,
    HeadersComponent,
    // AdminDashboardComponent,
    // SideBarComponent ,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    // AdminDashboardModule
    AdminRoutingModule
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




















// RROR Error: Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'login-admin/admin-dashboard'
// Error: Cannot match any routes. URL Segment: 'login-admin/admin-dashboard'