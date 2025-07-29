import { Component, effect } from '@angular/core';
import { TasksSignal } from '../../tasks.signals';
import { Task } from '../../models/Task.model';
import { TaskItemComponent } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {

  tasks: Task[] = []
  constructor() {
    effect(() => {
      this.tasks = TasksSignal()
    })
  }

  updateTask(newTask: Task) {
    TasksSignal.update(prev => prev.map(task => 
      task.id === newTask.id
      ? newTask
      : task
    ))
  }

  deleteTask(deleteTask: Task){
    TasksSignal.update(prev => prev.filter(task => task.id !== deleteTask.id))
  }
}
