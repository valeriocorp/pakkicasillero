import {RouterModule, Routes} from '@angular/router'
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';



const pagesRoutes:Routes = [


    {
        path:'',
        component: PagesComponent,
        canActivate:[LoginGuardGuard],
        children:[
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'perfil',
                component: ProfileComponent,
                data: {titulo:'Perfil de usuario Pakki'}
            },
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

        ]
    },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);