import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  showPassword: boolean = false;
  eyeOpenIcon: string = '/assets/images/eye-open.svg';
  eyeClosedIcon: string = '/assets/images/eye-closed.svg';
  eyeIcon: string = this.eyeClosedIcon;

  constructor() {}

  visibility() {
    this.showPassword = !this.showPassword;
    this.eyeIcon = this.showPassword ? this.eyeOpenIcon : this.eyeClosedIcon;
  }

  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);
  }

}
