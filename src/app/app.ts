import { Component, signal } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskItemComponent } from './components/task-item/task-item';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskItemComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TodoApp');
}
