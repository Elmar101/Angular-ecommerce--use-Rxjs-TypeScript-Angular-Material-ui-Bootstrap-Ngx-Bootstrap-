import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/service/alertify.service';
import { AuthorizationService } from 'src/app/service/authentication.service';
import { AuthorizationRepoService } from 'src/app/service/repository-service/authorizationRepo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted:boolean = false;
  constructor(public authorizationService: AuthorizationService,
              private authorizationRepoService: AuthorizationRepoService,
              private alertifyService: AlertifyService) { }

  ngOnInit(): void {
  }
  submitUser(form:NgForm){
    this.submitted = true;
    if (form.valid) {
      this.authorizationRepoService
        .saveSignins(this.authorizationService)
        .subscribe((res) => {
          this.authorizationService.clearAuthorization();
          this.submitted = false;
          form.reset();
        });
      this.alertifyService.success('Əməliyatiniz Uqurlu oldu');
    }
    else {
      this.alertifyService.error('Bir xəta oldu.Fomunuzu kontrol ediz.');
    }
  }
}
