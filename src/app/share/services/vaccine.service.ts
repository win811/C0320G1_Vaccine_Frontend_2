import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Patient } from '../models/patient';
import { Page } from '../models/dtos/page';
import { Vaccine } from '../models/vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

    private readonly URL = 'http://localhost:8080/api/v1';
    
    normalOption = { 
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getVaccineOptions(page: number): Object {
        const option = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          params: {
            page
          }
        };
        return option;
      }

    constructor(private http: HttpClient) { }

    getPageVaccine(pageNumber : number ) : Observable<Page<Vaccine>>{
        return this.http.get<Page<Vaccine>>(this.URL + "/vaccine-storage",this.getVaccineOptions(pageNumber));
    }
}