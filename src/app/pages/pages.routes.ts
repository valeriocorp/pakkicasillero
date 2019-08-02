import {RouterModule, Routes} from '@angular/router'
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PaquetesComponent } from './paquetes/paquetes.component';



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
            
            //mantenimientos
            {
                path:'usuarios',
                component: UsuariosComponent,
                data: {titulo:'Mantenimiento de usuarios'}
            },
            {
                path:'paquetes',
                component: PaquetesComponent,
                data: {titulo:'Mantenimiento de paquetes'}
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