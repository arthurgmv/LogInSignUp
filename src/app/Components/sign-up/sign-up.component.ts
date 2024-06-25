import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  showPassword: boolean = false;
  eyeOpenIcon: string = '/assets/images/eye-open.svg';
  eyeClosedIcon: string = '/assets/images/eye-closed.svg';
  eyeIcon: string = this.eyeClosedIcon;

  constructor(private router:Router) {}

  visibility() {
    this.showPassword = !this.showPassword;
    this.eyeIcon = this.showPassword ? this.eyeOpenIcon : this.eyeClosedIcon;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Account created successfully!');
      this.router.navigate(['/']);
    } else {
      if (form.controls['email']?.invalid) {
        alert('Please enter a valid email address.');
      } else if (form.controls['number']?.invalid) {
        alert('Please enter a valid mobile number.');
      } else if (form.controls['password']?.invalid) {
        alert('Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.');
      }
    }
  }
}
