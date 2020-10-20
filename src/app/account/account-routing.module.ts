import { UserGuard } from './../security/user.guard';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TreeTableComponent} from './tree-table/tree-table.component';
const routes: Routes = [

  {
    path: '', component: TreeTableComponent, canActivate : [UserGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
