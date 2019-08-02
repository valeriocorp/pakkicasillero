import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PrealertasComponent } from './prealertas/prealertas.component';
import { CalculaComponent } from './calcula/calcula.component';
import { PaquetesComponent } from './paquetes/paquetes.component';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProfileComponent,
        UsuariosComponent,
        PrealertasComponent,
        CalculaComponent,
        PaquetesComponent
    ],
    exports:[

        DashboardComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        PipesModule,
        FormsModule,
        CommonModule
    ]
})

export class PagesModule{}