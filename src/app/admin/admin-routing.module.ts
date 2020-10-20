import { AdminGuard } from './../security/admin.guard';
  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CreateVaccineRoadComponent } from './create-vaccine-road/create-vaccine-road.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { VaccineRoadComponent } from './vaccine-road/vaccine-road.component';

const routes: Routes = [

    {
      path: '', component: AdminLayoutComponent,canActivate: [AdminGuard] ,children : [
          { path: 'create-road/:id', component : CreateVaccineRoadComponent},
          { path: 'patient-list', component: PatientListComponent},
          { path: 'roaddetail/:id', component: VaccineRoadComponent}
      ]
    } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
