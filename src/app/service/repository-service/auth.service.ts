/* import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from '../rest.service';
import { AuthorizationRepoService } from './authorizationRepo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:3500";
  token: string | undefined | null;
  constructor(private http: HttpClient,private restService: RestService,
            private authorzationRepoService: AuthorizationRepoService ) {}

  authentication(userName: string, password: string ):Observable<any>{
   if (!userName || !password) return of(false);

    return this.http.post<any>(this.baseUrl + 'register',{
      name: userName,
      password: password
    },{responseType:'json'}).pipe(
      map( (user: any) => {
        const result = user;
        if(result){
          sessionStorage.setItem("token",result.token)
        }
       return sessionStorage.getItem("token");
      })
    );
  }
  authenticationGet(){
    return this.http.get(this.baseUrl + 'login');
  }

}
 */
