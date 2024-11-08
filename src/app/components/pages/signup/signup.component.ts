import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup successful:', this.name, this.email);
    // Add signup logic here (e.g., call API, navigate to dashboard)
  }
}
