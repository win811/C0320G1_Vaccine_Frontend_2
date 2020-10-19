import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {VaccineRoadComponent} from './vaccine-road/vaccine-road.component';

const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent, children: [{
      path: 'road', component: VaccineRoadComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
