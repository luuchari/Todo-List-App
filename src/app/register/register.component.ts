import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    const user = { name: this.name, password: this.password };
    localStorage.setItem(this.email, JSON.stringify(user));
    this.router.navigate(['/login']);
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('Form submitted:', this.name, this.email, this.password);
    // Add your registration logic here
  }
}

