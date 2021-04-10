import { Injectable } from '@angular/core';
import { Signin } from '../model/signin';

@Injectable()
export class AuthorizationService {
  authorization= new Signin();
  constructor() { }
  clearAuthorization(){
    this.authorization.id = null;
    this.authorization.name = this.authorization.email = this.authorization.password = null;
    this.authorization.isSent = false;
  }

}
