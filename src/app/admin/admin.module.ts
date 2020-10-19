import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { VaccineRoadComponent} from './vaccine-road/vaccine-road.component';
import {MatBadgeModule, MatButtonModule, MatExpansionModule, MatIconModule, MatTableModule} from '@angular/material';
import {MaterialModule} from '../material.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientCreateComponent } from './patient-create/patient-create.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    PatientListComponent,
    VaccineRoadComponent,
    PatientCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatBadgeModule,
    AdminRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents:[
    PatientCreateComponent
  ]
})
export class AdminModule { }
