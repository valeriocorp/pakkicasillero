import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProfileComponent
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