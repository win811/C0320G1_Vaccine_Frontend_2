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
  imports: [MatDialogModule],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class MaterialModule { }