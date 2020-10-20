import { NotificationService } from 'src/app/share/services/notification.service';
import { BookHistoryService } from './../../share/services/bookHistory.service';
import { Account } from './../../share/models/account';

import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';

import {MAT_DATE_LOCALE} from '@angular/material';
import { Patient } from 'src/app/share/models/patient';
import { Vaccine } from 'src/app/share/models/vaccine';
import { VaccineService } from 'src/app/share/services/vaccine.service';
import { NotifiByDucService } from 'src/app/share/services/notifi-by-duc.service';

import { BookHistory } from 'src/app/share/models/bookHistory';
import { TokenStorageService } from 'src/app/share/services/token-storage.service';

export interface DTO {
  name: string;
  category: string;
  country: string;
  injectionDate: Date;
}

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-registration-vaccination',
  templateUrl: './registration-vaccination.component.html',
  styleUrls: ['./registration-vaccination.component.css']
})
@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
  ],
})
export class RegistrationVaccinationComponent implements OnInit {
  statusLoading = false;
  verify = '';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  vacxin2: Vaccine = {} as Vaccine;
  vacxin: Vaccine = {
    id: 0,
    name: '',
    category: '',
    country: '',
  };
  patient: Patient = {} as Patient;
  bookHistory = {} as BookHistory;
  dto: DTO;
  message: string;
  account: Account = {id: 0};
  maxDate: Date;
  minDate: Date;
  maxDateRegistration: Date;
  minDateRegistration: Date;
  vaccineList: Vaccine[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  searchVaccine: SearchVaccine;
  showSpinners: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookHistoryService: BookHistoryService,
    private vaccineService: VaccineService,
    private noti: NotifiByDucService,
    private toastrService : NotificationService,
    private tokenStorageService: TokenStorageService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.vacxin2 = navigation.extras.state as Vaccine;
    console.log(this.vacxin2);
  }

  ngOnInit() {
// Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    this.maxDate = new Date(currentYear,currentMonth, currentDay);
    this.minDate = new Date(currentYear-100,currentMonth, currentDay);
    this.maxDateRegistration = new Date(currentYear,currentMonth+2, currentDay);
    this.minDateRegistration = new Date(currentYear,currentMonth, currentDay);
    this.firstFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$/)]],
      birthDay: ['', Validators.required],
      gender: ['', Validators.required],
      parentName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$/)]],
      parentIdCard: [''],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^0[0-9]{9}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)]],
      code: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      injectionDate: ['', Validators.required],
    });
    // tslint:disable-next-line:triple-equals
    if (this.vacxin2 != null) {
      this.vacxin = this.vacxin2;
      this.secondFormGroup.patchValue(this.vacxin2);
    }
    this.searchVaccine = {
      name: '',
      category: '',
      country: '',
      inventoryStatus: ''
    };
    this.getListVaccine();
  }

  getListVaccine() {
    this.vaccineService.getAllVaccine().subscribe(res => {
      this.vaccineList = res;
      console.log('list vacxin');
      console.log(this.vaccineList);
    }, error => {
      console.log(error);
    });
  }

  setInjection() {
    this.bookHistory.name = this.firstFormGroup.value.name;
    this.bookHistory.birthDay = this.firstFormGroup.value.birthDay;
    this.bookHistory.gender = this.firstFormGroup.value.gender;
    this.bookHistory.parentName = this.firstFormGroup.value.parentName;
    this.bookHistory.parentIdCard = this.firstFormGroup.value.parentIdCard;
    this.bookHistory.address = this.firstFormGroup.value.address;
    this.bookHistory.phoneNumber = this.firstFormGroup.value.phoneNumber;
    this.bookHistory.email = this.firstFormGroup.value.email;
    this.bookHistory.vaccine = this.vacxin;
    this.bookHistory.injectionDate = this.secondFormGroup.value.injectionDate;
  }

  registration() {
    this.statusLoading = true;
    
    
    console.log(this.bookHistory);

    this.bookHistoryService.registerBookHistory(this.bookHistory).subscribe(data => {
      // this.noti.showNotification('success', 'Thông Báo', data.message);
      this.toastrService.showSuccess(data.message,'Thông báo');
      this.statusLoading = false;
      this.router.navigate(['']);
    }, error => {
      this.statusLoading = false;
      // this.noti.showNotification('danger', 'Thông Báo', error1.error.message);
      this.toastrService.showError(error.error.message,"Thông báo");
    });
  }

  sendVerifyToken() {
    const email = this.firstFormGroup.value.email;
    this.bookHistoryService.sendVerifyToken(email).subscribe(data => {
      // this.noti.showNotification('success', 'Thông Báo', data.message);
      this.toastrService.showSuccess(data.message,"Thông báo");
    }, error => {
      // this.noti.showNotification('danger', 'Thông Báo', error.error.message);
      this.toastrService.showError(error.error.message,"Thông báo");
    });
  }

  VerifyCode() {
    this.statusLoading = true;
    const email = this.firstFormGroup.value.email;
    const code = this.firstFormGroup.value.code;
    this.bookHistoryService.verifyCode(email,code).subscribe(data => {
      // this.noti.showNotification('success', 'Thông Báo', data.message);
      this.toastrService.showSuccess(data.message,"Thông báo");
      this.verify = 'verify';
    }, error => {
      // this.noti.showNotification('danger', 'Thông Báo', error.error.message);
      this.toastrService.showError(error.error.message,'Thông báo');
    });
    this.statusLoading = false;
  }
}

export class SearchVaccine {
  name: string;
  category: string;
  country: string;
  inventoryStatus: string;

  constructor(searchVaccine: SearchVaccine) {
    this.name = searchVaccine.name;
    this.category = searchVaccine.category;
    this.country = searchVaccine.country;
    this.inventoryStatus = searchVaccine.inventoryStatus;
  }
}
