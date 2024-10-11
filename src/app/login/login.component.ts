import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the login form with validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Method to handle login form submission
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Retrieve the user data from local storage or JSON server (mocking for now)
      const storedUser = JSON.parse(localStorage.getItem(email) || 'null');

      if (storedUser && storedUser.password === password) {
        // Store the authenticated user's email in local storage
        localStorage.setItem('loggedInUser', email);

        // Redirect to the Todo List page after successful login
        this.router.navigate(['/todo']);
      } else {
        // Show error if login fails
        this.loginError = 'Invalid email or password. Please try again.';
      }
    } else {
      // Form validation error
      this.loginError = 'Please fill out all fields correctly.';
    }
  }

  // Method to check if a form control is invalid and touched
  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
}
