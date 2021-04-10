import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable()
export class ContactService {
  contact = new Contact();

  constructor() { }

  clearContact(){
    this.contact.id = null;
    this.contact.firstName = this.contact.lastName = this.contact.phone = this.contact.email  = null;
    this.contact.isSent = false;
  }
}
