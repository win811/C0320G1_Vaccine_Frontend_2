import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class VaccineRoadService {
  private readonly URL = 'http://localhost:8080/api/v1';
  normalOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  updateRoadDetail(id: number): Observable<any> {
    return this.http.put(this.URL + '/update-road-detail?detailId=' + id+'&isInjected=true', this.normalOption);
  }
}
