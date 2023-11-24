import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  // email: FormControl;
  name: FormControl;
  password: FormControl;

  constructor(private authService: AuthService, private router: Router){
    // this.email = new FormControl('', [Validators.required, Validators.email])
    this.name = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required)

    this.formLogin = new FormGroup({

      name: this.name,
      // email: this.email,
      password: this.password,
    });
  }

  onSubmit(): void{
    this.authService.login( this.formLogin.value.name, this.formLogin.value.password)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/home']);
      },

      error: (response) => {
        console.log(response.error);
      }
    })
  }








  showLoginForm = true;
  formBtnStyle: any = {}; // Changing style of the buttons (login/register)

  // loginForm: FormGroup;
  // snackBar: any;


  
  // constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  //   // Initialize the form group with the necessary controls and validators
  //   this.loginForm = this.fb.group({
  //     name: [''], // Initialize with an empty string
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirmPassword: [''] // Initialize with an empty string
  //   });

  //   // Subscribe to route parameter changes
  //   this.route.params.subscribe(params => {
  //     // Set showLoginForm based on the 'type' route parameter
  //     this.showLoginForm = params['type'] === 'login';
  //   });
  

  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  toggleForm(isLoginForm: boolean): void {
    // // Reset the form when switching between login and signup
    // this.loginForm.reset();
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

  //   // const type = isLoginForm ? 'login' : 'signup';

  //   // this.router.navigate([], {
  //   //   relativeTo: this.route,
  //   //   queryParams: { type },
  //   //   queryParamsHandling: 'merge'
  //   // });
  // }

  // submit() {
  //   if (this.loginForm.valid) {
  //     const { email, password, name, confirmPassword } = this.loginForm.value;

  //     if (this.loginForm.controls['name'].dirty) {
  //       // This is a signup request
  //       if (password === confirmPassword) {
  //         this.authService.register(name, email, password).subscribe(
  //           (response) => {
  //             console.log('Signup successful:', response);
  //             // Navigate to the welcome page after successful signup
  //             this.router.navigate(['/welcome']);
  //           },
  //           (error) => {
  //             console.error('Signup error:', error);
  //             // Handle error, e.g., display an error message to the user
  //           }
  //         );
  //       } else {
  //         console.error('Password and confirm password do not match.');
  //         // Handle error, e.g., display an error message to the user
  //         this.snackBar.open('Signup failed. Please try again.', 'Close', {
  //           duration: 3000, // Duration in milliseconds
  //         });
  //       }

  //     } 
  //     else {
  //       // This is a login request
  //       this.authService.login(email, password).subscribe(
  //         (response) => {
  //           console.log('Login successful:', response);
  //           // Navigate to the welcome page after successful login
  //           this.router.navigate(['']);
  //         },
  //         (error) => {
  //           console.error('Login error:', error);
  //           // Handle error, e.g., display an error message to the user
  //           this.snackBar.open('Login failed. Please check your credentials and try again.', 'Close', {
  //             duration: 3000, // Duration in milliseconds
  //            });
  //         }
  //       );
  //     }
  //   }
  // }
}
