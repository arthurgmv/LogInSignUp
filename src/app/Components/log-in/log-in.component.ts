import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon,
    RouterLink
  ],
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  password: string = "";
  showPassword: boolean = false;
  eyeOpenIcon: string = '/assets/images/eye-open.svg';
  eyeClosedIcon: string = '/assets/images/eye-closed.svg';
  eyeIcon: string = this.eyeClosedIcon;

  constructor() {}

  visibility() {
    this.showPassword = !this.showPassword;
    this.eyeIcon = this.showPassword ? this.eyeOpenIcon : this.eyeClosedIcon;
  }

}
