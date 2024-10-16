import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (_route) => {
  return true;
};
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('user') !== null; // Check if user is logged in
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false;
    }
    return true;
  }
}

