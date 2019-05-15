import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const appRoutes: Routes = [

    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'registro',
        component: DashboardComponent
    },
    {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path:'**',
        component: NopagefoundComponent
    },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});