import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {

  user = {username: '', id: 0};
  response : any = {success : false};

  constructor(private registerService: RegisterService, private router: Router ) {
  }

  public formData = {password: '', username: '', repeatedPassword: ''};

  onSubmit() {
    if(this.formData.password === this.formData.repeatedPassword) {
      this.registerService.register(this.formData.username, this.formData.password).subscribe(
        data => {
          this.response = data;
          if(this.response.success){
            this.router.navigate(['/home']);
          }
        }
      );
    }
  }

  protected readonly status = status;
}
