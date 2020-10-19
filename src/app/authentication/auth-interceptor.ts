import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { TokenStorageService } from '../share/services/token-storage.service';


const TOKEN_HEADER_KEY = 'Authorization';

//Created by: Quân
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenStorageService: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;

        const jwtResponse = this.tokenStorageService.getJwtResponse();

        if (jwtResponse != null) {
            authReq = req.clone({
                setHeaders: {
                    'authorization': `Bearer ${jwtResponse.jwttoken}`,
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Access-Control-Allow-Origin': 'http://localhost:4200'
                },
            });
        }
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
