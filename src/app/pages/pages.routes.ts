import {RouterModule, Routes} from '@angular/router'
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PrealertasComponent } from './prealertas/prealertas.component';
import { CalculaComponent } from './calcula/calcula.component';
import { PaqueteComponent } from './paquetes/paquete.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { RestablecerPassComponent } from './restablecer-pass/restablecer-pass.component';



const pagesRoutes:Routes = [


            {
                path:'dashboard',
                component: DashboardComponent,
                canActivate:[VerificaTokenGuard]
            },
            {
                path:'perfil',
                component: ProfileComponent,
                data: {titulo:'Perfil de usuario Pakki'}
            },
         
            {
                path:'pre-alerta',
                component: PrealertasComponent,
                data: {titulo:'Formulario prealertas'}
            },
            {
                path:'cotiza',
                component: CalculaComponent,
                data: {titulo:'Formulario cotizacion'}
            },
            {
                path:'busqueda/:termino',
                component: BusquedaComponent,
                data: {titulo:'busqueda de paquetes'}
            },
            
          
            
            //mantenimientos
            {
                path:'paquete/:id',
                component: PaqueteComponent,
                canActivate:[AdminGuard],
                data: {titulo:'crear paquetes'}
            },
            
            {
                path:'usuarios',
                component: UsuariosComponent,
                canActivate:[AdminGuard],
                data: {titulo:'Mantenimiento de usuarios'}
            },
            {
                path:'paquetes',
                component: PaquetesComponent,
                canActivate:[AdminGuard],
                data: {titulo:'Mantenimiento de paquetes'}
            },
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

  

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);