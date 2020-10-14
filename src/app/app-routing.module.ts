import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './home/body/body.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent
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
