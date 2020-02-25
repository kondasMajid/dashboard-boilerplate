import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './components/accounts/admin/login-admin/login-admin.component';
import { SignupAdminComponent } from './components/accounts/admin/signup-admin/signup-admin.component';
import { AdminDashboardComponent } from './components/dashboards/admin-dashboard/admin-dashboard.component';
// import { AdminDashboardModule } from './components/dashboards/admin-dashboard/admin-dashboard.module';


// const routes: Routes = [
//   { path: '', redirectTo: '/login-admin', pathMatch: 'full' },
//   { path: 'login-admin', component: LoginAdminComponent },
//   { path: 'sigup-admin', component: SignupAdminComponent },
//   {
//     path: '',
//     loadChildren: './components/dashboards/admin-dashboard/admin-routing.module#AdminRoutingModule'
//   }
// ];

const routes: Routes = [
  { path: '', redirectTo: 'login-admin', pathMatch: 'full'},
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'sigup-admin', component: SignupAdminComponent },
  { path: 'login-admin', 
  loadChildren: () => import('./components/dashboards/admin-dashboard/admin-routing.module').then(m => m.AdminRoutingModule)},
  // { path: 'sigup-admin',  component: SignupAdminComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // AdminDashboardModule
  ]
})
export class AppRoutingModule { }
