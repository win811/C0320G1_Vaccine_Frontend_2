  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CreateVaccineRoadComponent } from './create-vaccine-road/create-vaccine-road.component';

const routes: Routes = [

    {
      path: '', component: AdminLayoutComponent,children : [
          { path : 'create-road/:id', component : CreateVaccineRoadComponent}
      ]
    } 
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {
  }