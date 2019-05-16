import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { RegistroComponent } from './registro/registro.component';



const appRoutes: Routes = [


  
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'registro',
        component: RegistroComponent
    },

    {
        path:'**',
        component: NopagefoundComponent
    },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});