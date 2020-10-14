import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaccine } from 'src/app/share/models/vaccine';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrls: ['./vaccine-detail.component.css']
})
export class VaccineDetailComponent implements OnInit {

  vaccine : Vaccine;

  constructor(private router : Router) {
    const navigation = this.router.getCurrentNavigation();
    this.vaccine = navigation.extras.state as Vaccine;
    console.log(this.vaccine);
   }

  ngOnInit() {
  }

}
