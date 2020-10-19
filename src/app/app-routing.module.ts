
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { TableVaccineComponent } from './home/table-vaccine/table-vaccine.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
    path: "table-vaccine", component: TableVaccineComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
