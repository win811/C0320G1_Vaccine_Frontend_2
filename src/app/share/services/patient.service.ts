import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
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

}
