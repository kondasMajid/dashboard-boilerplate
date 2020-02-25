import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import {  RouterModule } from '@angular/router';
import { AdminRoutes } from './admin-routing';
import { ExtenstionAgentComponent } from './extenstion-agent/extenstion-agent.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
   
@NgModule({
  declarations: [
    AdminDashboardComponent,
    ExtenstionAgentComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [  ]
})
export class AdminRoutingModule { }
