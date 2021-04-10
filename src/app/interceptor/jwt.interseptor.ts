/* import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor( private loginService:LoginService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url === "http://localhost:3500login"){
      return next.handle(request);
    }else{
      request = request.clone({
        setHeaders:{Authorization :`${sessionStorage.getItem("token")}`}
      })
      return next.handle(request);
    }
  }
} */
