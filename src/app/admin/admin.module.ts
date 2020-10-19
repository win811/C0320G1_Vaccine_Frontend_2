import { MaterialModule } from './../material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateVaccineRoadComponent } from './create-vaccine-road/create-vaccine-road.component';
import { VaccineRoadComponent} from './vaccine-road/vaccine-road.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PatientCreateComponent } from './patient-create/patient-create.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    CreateVaccineRoadComponent,
    PatientListComponent,
    VaccineRoadComponent,
    PatientCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule
  ],
  entryComponents:[
    PatientCreateComponent
  ]
})
export class AdminModule { }
