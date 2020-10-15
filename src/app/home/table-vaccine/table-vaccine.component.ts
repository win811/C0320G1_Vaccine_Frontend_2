import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Vaccine } from 'src/app/share/models/vaccine';
import { VaccineService } from 'src/app/share/services/vaccine.service';

@Component({
  selector: 'app-table-vaccine',
  templateUrl: './table-vaccine.component.html',
  styleUrls: ['./table-vaccine.component.css']
})
export class TableVaccineComponent implements OnInit {

  vaccineList: Vaccine[];
  currentPage: number;
  pageSize: number;
  totalElements: number;

  constructor(
    private vaccineService : VaccineService,
    private router : Router
    ) { }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page : number) {
    console.log(page);
    this.vaccineService.getPageVaccine(page - 1).subscribe(res => {
      this.totalElements = res.totalElements;
      this.pageSize = res.size;
      this.currentPage = page;
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
