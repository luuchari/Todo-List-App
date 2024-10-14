import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';
}
isOverdue(task) {
  const currentDate = new Date().toISOString().split('T')[0];
  return task.dueDate < currentDate;
}
function isOverdue(_task: any) {
  throw new Error('Function not implemented.');
}

