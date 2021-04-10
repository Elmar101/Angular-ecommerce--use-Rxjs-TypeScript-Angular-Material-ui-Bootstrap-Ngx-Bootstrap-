import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../authentication.service';


@Injectable()
export class AuthorizationRepoService {

  private signin: AuthorizationService[] = [];

  constructor(
              private restService: RestService,
             ) { }

  getSignins(): AuthorizationService[] {
    return this.signin;
  }

  saveSignins(userInfo: AuthorizationService): Observable<AuthorizationService>{
    return this.restService.getSaveUserInfo(userInfo);
  }
}
