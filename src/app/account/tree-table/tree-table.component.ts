
import {Component, OnInit} from '@angular/core';
import {Node, Options} from 'ng-material-treetable';
import { TokenStorageService } from 'src/app/share/services/token-storage.service';
import {Patient} from '../../share/models/patient';
import {VaccineRoad} from '../../share/models/vaccineRoad';
import {VaccineRoadDetails} from '../../share/models/VaccineRoadDetails';
import {PatientService} from '../../share/services/patient.service';

declare var $ : any;

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

  accountName : string;
  dateNow = Date.now();
  panelOpenState = false;
  patients: Patient[] = [] as Patient[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(
    private patientService: PatientService,
    private tokenStorageService : TokenStorageService
    ) {
  }


  ngOnInit() {
    $(document).ready(function() {   
      // Goes to the bottom onLoad
      $(document).scrollTop($(document).height());    
      // This animates you back to the top    
      $('body, html').animate({scrollTop:0}, 'slow');    
  });
    this.accountName = this.tokenStorageService.getJwtResponse().accountName;
    this.getAllPatientByAccount(this.tokenStorageService.getJwtResponse().accountId);
  }

  getAllPatientByAccount(id) {
    this.patientService.getPatientByAccountId(id).subscribe(data => {
      console.log(data);
      this.patients = data;
    });
  }



}


