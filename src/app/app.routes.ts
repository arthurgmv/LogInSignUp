import {Routes} from '@angular/router';
import {LogInComponent} from "./Components/log-in/log-in.component";
import {SignUpComponent} from "./Components/sign-up/sign-up.component";

export const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'singup', component: SignUpComponent}
];
