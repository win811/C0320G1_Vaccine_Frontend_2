import { VaccineService } from './../../share/services/vaccine.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccine } from 'src/app/share/models/vaccine';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrls: ['./vaccine-detail.component.css']
})
export class VaccineDetailComponent implements OnInit {

  vaccine : Vaccine;

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private vaccineService : VaccineService

    ) {
    
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
        this.vaccineService.findVaccineById(Number(data.get("id"))).subscribe(data => {
          this.vaccine = data;
        })
    })
  }

}
