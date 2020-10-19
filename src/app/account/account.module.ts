import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreetableModule } from 'ng-material-treetable';
import {AccountRoutingModule} from './account-routing.module';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [TreeTableComponent],
  imports: [
    CommonModule,
    TreetableModule,
    AccountRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AccountModule { }
