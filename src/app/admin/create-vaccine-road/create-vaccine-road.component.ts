import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookHistoryService } from './../../share/services/bookHistory.service';
import { VaccineService } from './../../share/services/vaccine.service';
import { Patient } from './../../share/models/patient';
import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/share/models/vaccine';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/share/services/patient.service';

@Component({
  selector: 'app-create-vaccine-road',
  templateUrl: './create-vaccine-road.component.html',
  styleUrls: ['./create-vaccine-road.component.css']
})
export class CreateVaccineRoadComponent implements OnInit {

  isLinear = false;
  vaccine : Vaccine;
  patient : Patient;
  startTime : Date;
  vaccineList : Vaccine[];
  minDate = new Date();
  formGroup : FormGroup;

  constructor(
    private vaccineService : VaccineService,
    private patientService : PatientService,
    private bookHistoryService : BookHistoryService,
    private router : Router,
    private activeRoute : ActivatedRoute,
    private formBuilder : FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      startTime : ['',[Validators.required]]
    })
    this.activeRoute.paramMap.subscribe(data => {
      const patientId = Number(data.get("id"));
      this.patientService.getPatientById(patientId).subscribe(res => {
        this.patient = res;
      })
    })
  }

  ngOnInit() {
    this.vaccineService.getAllVaccine().subscribe(res => {
      this.vaccineList = res;
    })
  }

}
