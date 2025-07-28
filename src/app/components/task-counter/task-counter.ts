import {  Component, effect  } from '@angular/core';
import { TasksSignal } from '../../tasks.signals';

@Component({
  selector: 'app-task-counter',
  imports: [],
  templateUrl: './task-counter.html',
  styleUrl: './task-counter.css',
})
export class TaskCounterComponent {
  readonly count = {
    completed: 0,
    pending: 0
  }

  constructor () {
    effect(() => {
      this.count.completed = TasksSignal().filter(task => task.completed).length
      this.count.pending = TasksSignal().filter(task => !task.completed).length
    })
  }
}
