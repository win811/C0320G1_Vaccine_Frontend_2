import { NotificationService } from 'src/app/share/services/notification.service';
import { VaccineRoadService } from './../../share/services/vaccine-road.service';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookHistoryService } from './../../share/services/bookHistory.service';
import { VaccineService } from './../../share/services/vaccine.service';
import { Patient } from './../../share/models/patient';
import { Component, Inject, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/share/models/vaccine';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/share/services/patient.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-vaccine-road',
  templateUrl: './create-vaccine-road.component.html',
  styleUrls: ['./create-vaccine-road.component.css']
})
export class CreateVaccineRoadComponent implements OnInit {

  isLinear = false;
  vaccine : Vaccine;
  patient : Patient;
  vaccineList : Vaccine[];
  minDate = new Date();
  formGroup : FormGroup;

  constructor(

    private vaccineService : VaccineService,
    private patientService : PatientService,
    private bookHistoryService : BookHistoryService,
    private vaccineRoadService : VaccineRoadService,
    private toastrService : NotificationService,
    private router : Router,
    private activeRoute : ActivatedRoute,
    private formBuilder : FormBuilder,
    private dialogRef: MatDialogRef<CreateVaccineRoadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.formGroup = this.formBuilder.group({
      startTime : ['',[Validators.required]]
    })
    this.patient = this.data.patient;
    // this.activeRoute.paramMap.subscribe(data => {
    //   const patientId = Number(data.get("id"));
    //   this.patientService.getPatientById(patientId).subscribe(res => {
    //     this.patient = res;
    //   })
    // })
  }

  ngOnInit() {
    this.vaccineService.getAllVaccine().subscribe(res => {
      this.vaccineList = res;
    })
  }


  createVaccineRoad() {
    if (this.vaccine != null && this.formGroup.valid) {
      const date = new Date(this.formGroup.value.startTime);
      const startTime = date.toISOString().substring(0,10);
      this.vaccineRoadService.createVaccineRoad(this.patient.id,this.vaccine.id,startTime)
      .subscribe(res => {
        this.dialogRef.close();
        this.toastrService.showSuccess('Đã tạo lộ trình mới thành công','Thông báo');
      },error => {
        this.toastrService.showError("Đã gặp lỗi trong quá trình tạo mới","Thông báo");
      })
    }
  }

  

}
