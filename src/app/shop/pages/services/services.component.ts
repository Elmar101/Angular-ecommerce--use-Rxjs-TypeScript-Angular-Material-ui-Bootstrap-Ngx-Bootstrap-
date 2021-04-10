import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/model/services';
import { ServicesRepositoryService } from 'src/app/service/repository-service/servicesRepo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public serviceRepoServices: ServicesRepositoryService) { }

  ngOnInit(): void {

  }

}
