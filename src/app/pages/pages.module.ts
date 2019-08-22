import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PrealertasComponent } from './prealertas/prealertas.component';
import { CalculaComponent } from './calcula/calcula.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { PaqueteComponent } from './paquetes/paquete.component';
import { TerminosComponent } from './terminos/terminos.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
    declarations:[
       // PagesComponent,
        DashboardComponent,
        ProfileComponent,
        UsuariosComponent,
        PrealertasComponent,
        CalculaComponent,
        PaquetesComponent,
      //  ModalUploadComponent,
        PaqueteComponent,
        TerminosComponent,
        TratamientoComponent,
        BusquedaComponent
    ],
    exports:[

        DashboardComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        PipesModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class PagesModule{}