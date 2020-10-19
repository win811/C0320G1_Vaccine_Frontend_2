import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import { PatientCreateComponent } from './patient-create/patient-create.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    PatientListComponent,
    PatientCreateComponent
  ],
  imports: [
    CommonModule,
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
