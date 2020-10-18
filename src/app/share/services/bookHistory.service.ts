import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookHistory } from '../models/bookHistory';

@Injectable({
    providedIn: 'root'
  })

  export class BookHistoryService {
   
    private readonly URL = 'http://localhost:8080/api/v1';
    
    normalOption = { 
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    verifyCodeOptions = (email : string,code : string) => {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params : {
          email,
          code
        }
      }
    }
    
    constructor(private http: HttpClient) {
    }

    // CREATE BY ANH DUC
  sendVerifyToken(email): Observable<any> {
    const link = this.URL + '/bookHistory/verify';
    return  this.http.post(link, email, this.normalOption);
  }
  // CREATE BY ANH DUC
  verifyCode(email : string, code : string): Observable<any> {
    const link = this.URL + '/bookHistory/verifyCode';
    return  this.http.post(link,null,this.verifyCodeOptions(email,code));
  }

  registerBookHistory(bookHistory : BookHistory) : Observable<any>{
    const link = this.URL + '/bookHistory/registration';
    return this.http.post(link,bookHistory,this.normalOption);
  }

  }