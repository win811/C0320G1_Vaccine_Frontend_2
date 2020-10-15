import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatSelectModule,
    MatToolbarModule, 
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatRadioModule, 
    MatStepperModule,
  } from '@angular/material';

  @NgModule({
    imports : [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule,
      MatTableModule,
      MatCheckboxModule,
      MatDatepickerModule, 
      MatDialogModule,
      MatFormFieldModule,
      MatProgressBarModule,
      MatRadioModule, 
      MatStepperModule,
    ],
    exports: [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule,
      MatTableModule,
      MatCheckboxModule,
      MatDatepickerModule, 
      MatDialogModule,
      MatFormFieldModule,
      MatProgressBarModule,
      MatRadioModule, 
      MatStepperModule,
    ]
  })
  export class MaterialModule { }