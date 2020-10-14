
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './home/body/body.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { TableVaccineComponent } from './home/table-vaccine/table-vaccine.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TableVaccineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
