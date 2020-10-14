import { TokenStorageService } from './token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthLoginInfo } from '../models/dtos/login-info';
import { JwtResponse } from '../models/dtos/jwt-response';



@Injectable({
  providedIn: 'root'
})
//Created by: Quân
export class AuthJwtService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  loginUrl = 'http://localhost:8080/api/v1/';

  constructor(private httpClient: HttpClient) {
  }

  attemptAuth(userInfo: AuthLoginInfo): Observable<JwtResponse> {

    return this.httpClient.post<JwtResponse>(this.loginUrl + 'login', userInfo, this.httpOptions);
  }

}
