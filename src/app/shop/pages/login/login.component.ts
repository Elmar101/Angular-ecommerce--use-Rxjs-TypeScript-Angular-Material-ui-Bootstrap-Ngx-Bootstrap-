import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Signin } from 'src/app/model/signin';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userName!: string;
  public password!: string;
  public errorMessage!: string;
  submitted:boolean = false;
  public loginUser: Signin[] = [];

  constructor(private router: Router, private restService: RestService) {
    this.restService.getUserInfo().subscribe((res) => {
      this.loginUser = res;
    });
  }

  ngOnInit(): void {}

  login(form: NgForm): void {
    this.submitted = true;
    if(form.valid){
      for( let i=0; i<this.loginUser.length; i++ ){
        if(this.userName == this.loginUser[i].authorization.name &&
           this.password == this.loginUser[i].authorization.password){
           this.router.navigateByUrl('/card')
           form.reset();
        }
        else this.errorMessage="Səhf İstifadəçi adi və ya Şifrə";
      }
      this.submitted = false;
    } else this.errorMessage ="Bilgilərinizə Əksizsiz Girin";
  }
}
