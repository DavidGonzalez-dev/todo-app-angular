import { Component, signal } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskItemComponent } from './components/task-item/task-item';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskCounterComponent } from './components/task-counter/task-counter';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent, TaskCounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TodoApp');
}
