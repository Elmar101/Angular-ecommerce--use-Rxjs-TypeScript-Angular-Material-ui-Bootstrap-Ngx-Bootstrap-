/* import { Injectable } from "@angular/core";
import { Observable,of } from "rxjs";
import { AuthService } from "./repository-service/auth.service";

//import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private authService: AuthService){}

  authenticate(userName: string , password: string) {
    return this.authService.authentication(userName,password);
  }

  getAuthenticate(){
    return this.authService.authenticationGet();
  }

 // istifadeci login olub olmayib
  get _authenticated(): Observable<boolean> {
    return of(this.authService.token !=null);
  }
 /*/
  // logout ucunn gelecekde lazim olar
  /* clear(): void{
    this.authService.token = null;
  } */
/*/
} */
