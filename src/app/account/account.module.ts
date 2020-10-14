import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreetableModule } from 'ng-material-treetable';
import {AccountRoutingModule} from './account-routing.module';


@NgModule({
  declarations: [TreeTableComponent],
  imports: [
    CommonModule,
    TreetableModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
