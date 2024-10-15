import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthGuard } from './auth.guard'; // Correct import for AuthGuard
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/login' }, // wildcard route
];

@NgModule({
  declarations: [ // Ensure AppComponent is declared here
    LoginComponent,
    RegisterComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthGuard], // AuthGuard should be provided here
  
})
export class AppModule { }
