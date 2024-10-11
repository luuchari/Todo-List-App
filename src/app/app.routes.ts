
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
  import { CanActivate, Router } from '@angular/router';




const route: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todo-list', component: TodoListComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule, // Add ReactiveFormsModule
      FormsModule // Add FormsModule
    ],
    providers: [],
    
  })

   
  @NgModule ({
    declarations: [
      AppComponent
      
    ],
    imports: [
      BrowserModule,
      FormsModule // <-- Ensure this is listed in imports
    ],
    bootstrap: [AppComponent]
  })
 
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(): boolean {
      if (localStorage.getItem('loggedInUser')) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  
  
  export class AppModule { }



