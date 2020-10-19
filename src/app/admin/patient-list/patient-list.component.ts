import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../share/services/patient.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {Patient} from '../../share/models/patient';
import {PatientSearchDTO} from '../../share/models/dtos/PatientSearchDTO';
import {map, tap} from 'rxjs/operators';
import {PatientCreateComponent} from '../patient-create/patient-create.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private formSearchPatient: FormGroup;
  patients: Observable<Patient[]>;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  isEmpty = false;
  hideableDiv = false;
  private message: string;
  private searchFields: PatientSearchDTO = {} as PatientSearchDTO;

  constructor(
    public formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.formSearchPatient = this.formBuilder.group({
      fullName: ['', [Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      parentName: ['', [Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      parentIdCard: ['', [Validators.pattern('^[0-9]+$')]]
    });
    this.getPage(1);
  }

  getPage(pageNumber) {
    this.patients = this.patientService.getPatient(this.searchFields, pageNumber).pipe(
      tap(res => {
        console.log(res);
        if (res === null) {
          this.message = 'Không tìm thấy thông tin khách hàng khớp với tìm kiếm !';
          this.hideableDiv = false;
        } else {
          this.message = '';
        }
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.isEmpty = false;
        if (res.content.length ===  0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log('vào được err của tap');
      }),
      map(res => res.content)
    );
    console.warn(this.patients);
  }

  search() {
    this.searchFields = this.formSearchPatient.value as PatientSearchDTO;
    console.log(this.searchFields);
    this.getPage(1);
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(PatientCreateComponent, {
      width: "810px",
      height: "500px",
      autoFocus: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.getPage(this.currentPage)
      }
    });
  }

}
