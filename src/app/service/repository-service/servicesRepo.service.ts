import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Services } from 'src/app/model/services';
import { RestService } from '../rest.service';

@Injectable()
export class ServicesRepositoryService {

  services: Services[] = [];

  constructor(private restService: RestService) {
    this.restService
       .getServices()
       .subscribe(services=> this.services = services
       );
  }
}
