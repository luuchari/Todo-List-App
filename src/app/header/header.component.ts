import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class NavComponent {

  constructor(private router: Router) {}

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    // Example: check if there is a 'loggedInUser' key in localStorage
    return !!localStorage.getItem('loggedInUser');
  }

  // Logout method
  logout(): void {
    // Clear user session from localStorage
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('tasks'); // Optionally clear task list if needed
    
    // Navigate to the login page after logging out
    this.router.navigate(['/login']);
  }
}
