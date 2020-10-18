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
    MatNativeDateModule,
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
      MatNativeDateModule,
      MatDialogModule,
      MatFormFieldModule,
      MatProgressBarModule,
      MatRadioModule, 
      MatStepperModule,
    ],
    providers: [
      MatDatepickerModule,
    ]
  })
  export class MaterialModule { }