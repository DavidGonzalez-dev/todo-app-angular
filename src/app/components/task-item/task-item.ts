import { Component, input, output } from '@angular/core';
import { Task } from '../../models/Task.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  taskInfo = input<Task>({id: 0, description: '', completed: false})
  isFadingOut = false;

  taskChange = output<Task>()
  toggleComplete() {
    this.taskChange.emit({...this.taskInfo(), completed: !this.taskInfo().completed})
  }

  taskDelete = output<Task>()
  triggerDeleteTask() {
    this.isFadingOut = true;
  }
  deleteTask() {
    if (this.isFadingOut) {
      this.taskDelete.emit(this.taskInfo())
    }
  }
}
