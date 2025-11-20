import { Component } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterService} from './register.service';

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

  constructor(private registerService: RegisterService ) {
  }

  public formData = {password: '', username: '', repeatedPassword: ''};

  onSubmit() {
    if(this.formData.password === this.formData.repeatedPassword) {
      this.registerService.register(this.formData.username, this.formData.password).subscribe(
        data => {
          this.user.username = data.username;
          this.user.id = data.id;
        }
      );
    }

    console.log(this.user);
  }

}
