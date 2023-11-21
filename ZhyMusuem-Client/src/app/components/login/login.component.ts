import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showLoginForm = true;

  toggleForm(isLoginForm: boolean): void {
    // this.showLoginForm = isLoginForm;
    console.log('toggleForm called');
  this.showLoginForm = isLoginForm;
  console.log('showLoginForm:', this.showLoginForm);
  }

}
