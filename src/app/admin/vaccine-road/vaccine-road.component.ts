import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../share/services/patient.service';
import {Patient} from '../../share/models/patient';
import {VaccineRoadService} from '../../share/services/vaccine-road.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-vaccine-road',
  templateUrl: './vaccine-road.component.html',
  styleUrls: ['./vaccine-road.component.css']
})
export class VaccineRoadComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'date', 'status', 'action'];

  private idPatient: string;
  patient: Patient = {} as Patient;

  constructor(public dialog:MatDialog,private activatedRoute: ActivatedRoute, private patientService: PatientService, private vaccineRoadService: VaccineRoadService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idPatient = params['id'];
    });
  }

  ngOnInit() {
    this.getPatient(1);
  }

  getPatient(id) {
    this.patientService.getPatientById(id).subscribe(data => {
      this.patient = data;
      console.log(this.patient);

    });
  }
  changeStatus(id) {
    this.vaccineRoadService.updateRoadDetail(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
    // this.getPatient(this.idPatient);
  }

  openDialog() {

  }
}
