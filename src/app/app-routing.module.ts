import { BodyComponent } from './home/body/body.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableVaccineComponent } from './home/table-vaccine/table-vaccine.component';

const routes: Routes = [{
  path: "table-vaccine", component: TableVaccineComponent
},
{ path: "", component: BodyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
