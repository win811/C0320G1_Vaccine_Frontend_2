import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {PatientListComponent} from './patient-list/patient-list.component';

const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent, children: [
      {path: 'patient-list', component: PatientListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
