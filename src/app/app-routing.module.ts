import { VaccineDetailComponent } from './home/vaccine-detail/vaccine-detail.component';
import { BodyComponent } from './home/body/body.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableVaccineComponent } from './home/table-vaccine/table-vaccine.component';

const routes: Routes = [{
  path: "table-vaccine", component: TableVaccineComponent
},
{ path: "", component: BodyComponent },
{ path: "vaccine-detail", component: VaccineDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
