import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PatientSearchDTO} from '../models/dtos/PatientSearchDTO';
import {Observable} from 'rxjs';
import {Page} from '../models/dtos/page';
import {Patient} from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly URL = 'http://localhost:8080/api/v1';

  normalOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  constructor(private http: HttpClient) {
  }

  getPatientByAccountId(id: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.URL + '/patientByAccount/' + id, this.normalOption);
  }
  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.URL + '/patient/' + id, this.normalOption);
  }

  getPatientHttpOptions(searchField: PatientSearchDTO, page: number): Object {
    const patient = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        fullName: searchField.fullName,
        parentName: searchField.parentName,
        parentIdCard: searchField.parentIdCard,
        page
      }
    };
    return patient;
  }

  getPatient(searchField: PatientSearchDTO, page: number): Observable<Page<Patient>> {
    return this.http.get<Page<Patient>>(`${this.URL}/admin/patient-list`, this.getPatientHttpOptions(searchField, page));
  }
   
  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.URL + '/admin/patient-list/create',patient);
  }
}

  
