import { Injectable } from '@angular/core';
import { ContactService } from '../contact.service';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';

@Injectable()
export class ContactRepoService {

  private contacts: ContactService[] = [];

  constructor(
              private contactService: ContactService,
              private restService: RestService,
             ) { }

  getContacts(): ContactService[]{
    return this.contacts;
  }

  saveContacts(contact: ContactService): Observable<ContactService>{
    return this.restService.getSaveContact(contact);
  }

}
