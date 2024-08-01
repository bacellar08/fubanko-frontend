import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import {DashboardComponent} from "./views/dashboard/dashboard.component";

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
];
