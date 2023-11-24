import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formSigup: FormGroup;

  name: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(private authService: AuthService){
    this.name = new FormControl('', Validators.required)
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.password = new FormControl('', Validators.required)

    this.formSigup = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  onSubmit(): void{
    this.authService.register(this.formSigup.value.name, this.formSigup.value.email, this.formSigup.value.password)
    .subscribe({
      next: (response) => {
        console.log(response);
      },

      error: (response) => {
        console.log(response.error);
      }
    })
  }

  showLoginForm = true;
  formBtnStyle: any = {}; // Changing style of the buttons (login/register)

  toggleForm(isLoginForm: boolean): void {
    //   // Reset the form when switching between login and signup
    //   this.loginForm.reset();
    //   // this.loginForm.patchValue({ name: '', confirmPassword: '' });
  
      this.showLoginForm = isLoginForm;
      // Your existing code for styling
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
