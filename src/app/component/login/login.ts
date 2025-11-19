import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  providers: [LoginService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{
  public login: any[] = [];

  public user:any;

  constructor(private _loginService: LoginService) {

  }

  formData = {username:"", password:""};
  onSubmit() {
    const params = {
      username: this.formData.username,
      password:this.formData.password
    };


    this._loginService.login(params)
      .subscribe({next: data => {this.user = data;
        console.log(this.user)
      }})


  }
}
