import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  providers: [LoginService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{
  public login: any[] = [];

  public response:any;

  constructor(private _loginService: LoginService, private router: Router) {

  }

  formData = {username:"", password:""};

  onSubmit() {
    const params = {
      username: this.formData.username,
      password:this.formData.password
    };


    this._loginService.login(this.formData.username, this.formData.password)
      .subscribe( data => {
        this.response = data;
        if(this.response.success){
          this.router.navigate(['home']);
        }
      })

  }

  onButtonClick() {
  this._loginService.testLogin().subscribe({next: data => {console.log(data)}})
  }
}
