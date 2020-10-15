import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class BookHistory {
   
    private readonly URL = 'http://localhost:8080/api/v1';
    
    normalOption = { 
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    
    constructor(private http: HttpClient) {
    }

    // CREATE BY ANH DUC
  sendVerifyToken(email): Observable<any> {
    const link = this.URL + '/bookHistory/verify';
    return  this.http.post(link, email);
  }
  // CREATE BY ANH DUC
  verifyCode(patient): Observable<any> {
    const link = this.URL + '/bookHistory/verifyCode';
    return  this.http.post(link,patient);
  }


  }