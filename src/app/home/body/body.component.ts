import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Vaccine } from 'src/app/share/models/vaccine';
import { VaccineService } from 'src/app/share/services/vaccine.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  vaccineList: Vaccine[];

  constructor(
    private vaccineService : VaccineService,
    private router : Router
  ) { }

  ngOnInit() {
    this.vaccineService.getPageVaccine(0).subscribe(res => {
      this.vaccineList = res.content;
    }, error => {
      console.log(error);
    });
  }

  goToDetail(vaccine : Vaccine) {
    // const navigationExtras: NavigationExtras = {
    //   state: vaccine
    // };
    this.router.navigate(['/vaccine-detail',vaccine.id]);
  }

}
