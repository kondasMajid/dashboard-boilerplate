import { Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { LoginAdminComponent } from '../../accounts/admin/login-admin/login-admin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ExtenstionAgentComponent } from './extenstion-agent/extenstion-agent.component';

// export const AdminRoutes: Routes = [
//   {
//     path: '', component: AdminDashboardComponent
//   },
//   { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
//   { path: 'admin-dashboard', component: AdminDashboardComponent },

// ];

export const AdminRoutes: Routes = [                                 
  { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  // { path: 'admin-extension-agent', component: ExtenstionAgentComponent },
  

];