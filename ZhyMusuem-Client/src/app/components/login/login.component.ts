import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showLoginForm = true;
  formBtnStyle: any = {}; // Changing style of the buttons (login/register)

  toggleForm(isLoginForm: boolean): void {
    this.showLoginForm = isLoginForm;

    if (this.showLoginForm) {
      this.formBtnStyle = {
        // 'left': '110px',
        // 'background': 'linear-gradient(to right, #725c39, #bcab91)',
        // 'color': 'white'
      };
    } else {
      this.formBtnStyle = {
        'left': '110px',
        'background': 'linear-gradient(to right, #725c39, #bcab91)',
        'color': '#FDFDFD'
        // 'background': 'linear-gradient(to right, #15110b, #a5a5a4)'
        // #725c39, #bcab91
      };
    }
  }

}
