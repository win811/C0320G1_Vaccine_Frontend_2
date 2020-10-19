import {Component, OnInit} from '@angular/core';
import {Node, Options} from 'ng-material-treetable';
import {Patient} from '../../share/models/patient';
import {VaccineRoad} from '../../share/models/vaccineRoad';
import {VaccineRoadDetails} from '../../share/models/VaccineRoadDetails';
import {PatientService} from '../../share/services/patient.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {
  dateNow = Date.now();
  panelOpenState = false;
  patients: Patient[] = [] as Patient[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private patientService: PatientService) {
  }


  ngOnInit() {
    this.getAllPatientByAccount(1);
  }

  getAllPatientByAccount(id) {
    this.patientService.getPatientByAccountId(id).subscribe(data => {
      console.log(data);
      this.patients = data;
    });
  }



}


