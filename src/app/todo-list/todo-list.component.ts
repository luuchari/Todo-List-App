import { Component } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: { task: string, priority: string, dueDate: string }[] = [];

  addTask(task: string, priority: string, dueDate: string) {
    if (task && priority && dueDate) {
      this.tasks.push({ task, priority, dueDate });
    }
  }

  deleteTask(taskToDelete: { task: string, priority: string, dueDate: string }) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }

  getPriorityColor(priority: string): string {
    // Ensure the priority has a value
    if (!priority) {
      return 'black'; // default color if priority is undefined
    }

    // Return corresponding color based on priority
    switch (priority) {
      case 'High': return 'red';
      case 'Medium': return 'orange';
      case 'Low': return 'green';
      default: return 'black'; // fallback color
    }
  }
}
