import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { VaccineRoadComponent} from './vaccine-road/vaccine-road.component';
import {MatBadgeModule, MatButtonModule, MatExpansionModule, MatIconModule, MatTableModule} from '@angular/material';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    VaccineRoadComponent,
  ] ,
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatBadgeModule,

  ]
})
export class AdminModule { }
