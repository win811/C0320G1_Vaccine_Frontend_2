import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../share/services/patient.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Patient} from '../../share/models/patient';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patientCreateForm: FormGroup;

  constructor(
    private patientService : PatientService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PatientCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  // Thành Long
  ngOnInit() {
    this.patientCreateForm = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      birthDay: ["", [Validators.required]],
      parentName: ["", [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ\\ ]*$')]],
      parentIdCard: ["", [Validators.required, Validators.pattern('^[0-9]{9}$')]],
    });
  }

  // Thành Long
  onSubmit() {
    let patient = this.patientCreateForm.value as Patient;
    this.patientService.createPatient(patient).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
