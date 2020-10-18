import { RegistrationVaccinationComponent } from './home/registration-vaccination/registration-vaccination.component';
import { MaterialModule } from './material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './home/body/body.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { TableVaccineComponent } from './home/table-vaccine/table-vaccine.component';
import { VaccineDetailComponent } from './home/vaccine-detail/vaccine-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TableVaccineComponent,
    VaccineDetailComponent,
    RegistrationVaccinationComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModuleModule,
    NgxPaginationModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
