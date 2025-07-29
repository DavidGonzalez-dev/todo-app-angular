import {  Component, computed  } from '@angular/core';
import { TasksSignal } from '../../tasks.signals';

@Component({
  selector: 'app-task-counter',
  imports: [],
  templateUrl: './task-counter.html',
  styleUrl: './task-counter.css',
})
export class TaskCounterComponent {
  
  readonly count = computed(() => ({
    completed: TasksSignal().filter(task => task.completed).length,
    total: TasksSignal().length
  }))

  readonly allTaskCompleted = computed(() => this.count().completed === this.count().total && this.count().total > 0)

}
