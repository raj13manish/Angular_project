import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Login successful:', this.email);
      // Add login logic here (e.g., call API, navigate to dashboard)
    } else {
      alert('Please enter both email and password.');
    }
  }
}
