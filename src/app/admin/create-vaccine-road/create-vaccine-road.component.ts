// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
// import { VaccineService } from 'src/app/share/services/vaccine.service';
// import { Vaccine } from 'src/app/share/models/vaccine';

// @Component({
//   selector: 'app-create-vaccine-road',
//   templateUrl: './create-vaccine-road.component.html',
//   styleUrls: ['./create-vaccine-road.component.css']
// })
// export class CreateVaccineRoadComponent implements OnInit {

//   createForm: FormGroup;
//   today = new Date();
//   importErrors = IMPORT_ERRORS;

//   constructor(private formBuilder: FormBuilder, private vaccineService: VaccineService) { }

//   ngOnInit() {
//     this.createForm = this.formBuilder.group({
//       name: ["", [Validators.required]],
//       content: ["", [Validators.required, invalidNumber]],
//       category: ["", [Validators.required]],
//       amount: ["", [Validators.required, invalidNumber]],
//       receiveDate: ["", [Validators.required, higherThanToday]],
//       expiryDate: ["", [Validators.required, lowerThanToday]],
//       licenseCode: ["", [Validators.required,]],
//       conditions: ["", [Validators.required,]],
//       country: ["", [Validators.required, containNumber]],
//       limitAge: ["", [Validators.required, ageInValid]],
//       price: ["", [Validators.required, invalidNumber]],
//     })
//   }

//   // import() {
//   //   if (this.createForm.valid) {
//   //     let vaccine = this.createForm.value as Vaccine;
//   //     this.vaccineService.importVaccine(vaccine).subscribe(data => {
//   //       console.log(data);
//   //     }, error => {
//   //     })
//   //   } else {

//   //   }
//   // }

//   get name() {
//     return this.createForm.get('name');
//   }

//   get content() {
//     return this.createForm.get('content');
//   }

//   get category() {
//     return this.createForm.get('category');
//   }

//   get amount() {
//     return this.createForm.get('amount');
//   }

//   get receiveDate() {
//     return this.createForm.get('receiveDate');
//   }

//   get expiryDate() {
//     return this.createForm.get('expiryDate');
//   }

//   get licenseCode() {
//     return this.createForm.get('licenseCode');
//   }

//   get conditions() {
//     return this.createForm.get('conditions');
//   }

//   get country() {
//     return this.createForm.get('country');
//   }

//   get limitAge() {
//     return this.createForm.get('limitAge')
//   }

//   get price() {
//     return this.createForm.get('price')
//   }

// }


// const invalidNumber = (control: AbstractControl): ValidationErrors => {
//   if (isNaN(Number.parseInt(control.value))) return { isNaN: true };
//   return null;
// }

// const containNumber = (control: AbstractControl): ValidationErrors => {
//   const characterRegex = /^[^\d]+$/;
//   if (!characterRegex.test(control.value)) return { containNumber: true };
//   return null;
// }

// const higherThanToday = (control: AbstractControl): ValidationErrors => {
//   let inputDate = new Date(control.value);
//   let today = new Date();
//   if (differenceInHours(inputDate, today) > 0) return { higherThanToday: true };
//   return null;
// }

// const lowerThanToday = (control: AbstractControl): ValidationErrors => {
//   let inputDate = new Date(control.value);
//   let today = new Date();
//   if (differenceInHours(inputDate, today) <= 0) return { lowerThanToday: true };
//   return null;
// }

// const ageInValid = (control: AbstractControl): ValidationErrors => {
//   if (isNaN(Number.parseInt(control.value))) return { ageInValid: true };
//   return null;
// }

// const IMPORT_ERRORS = {

//   nameErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' }
//   ],
//   contentErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'isNaN', message: 'Hàm lượng phải là số!' }
//   ],
//   categoryErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' }
//   ],
//   amountErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'isNaN', message: 'Số lượng phải là số!' }
//   ],
//   receiveDateErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'higherThanToday', message: 'Ngày nhập không được quá hôm nay!' }
//   ],
//   expiryDateErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'lowerThanToday', message: 'Hạn sử dụng phải lớn hơn hôm nay!' }
//   ],
//   licenseCodeErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' }
//   ],
//   conditionsErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' }
//   ],
//   countryErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'containNumber', message: 'Quốc gia không được chứa số!' },
//   ],
//   limitAgeErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'ageInValid', message: 'Dưới n tuổi : -n, trên n tuổi : n' }
//   ],
//   priceErrors: [
//     { name: 'required', message: 'Vui lòng nhập!' },
//     { name: 'isNaN', message: 'Đơn giá phải là số!' }
//   ]
// }


