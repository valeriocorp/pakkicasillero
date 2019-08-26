import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { RegistroComponent } from './registro/registro.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { ContrasenaComponent } from './login/contrasena/contrasena.component';
import { RestablecerPassComponent } from './pages/restablecer-pass/restablecer-pass.component';



const appRoutes: Routes = [


  
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'pass',
        component: ContrasenaComponent
    },
    {
        path:'restablecer-pass',
        component: RestablecerPassComponent,
        data: {titulo:'restableciendo la contraseña'}
    },
    {
        path:'registro',
        component: RegistroComponent
    },

    {
        path:'',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        loadChildren: './pages/pages.module#PagesModule'
    },

    {
        path:'**',
        component: NopagefoundComponent
    },


];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});