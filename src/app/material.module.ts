import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';

  @NgModule({
    imports : [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule,
      MatTableModule,
      MatDialogModule
    ]
    ,exports: [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule,
      MatTableModule,
      MatDialogModule
    ]
  })
  export class MaterialModule { }
