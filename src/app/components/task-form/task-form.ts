import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/Task.model';
import { TasksSignal } from '../../tasks.signals';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskFormComponent {

  taskDescription = new FormControl('', Validators.required)
  validationError = ''

  registerTask() {
    const newTask: Task = {
      id: TasksSignal().length,
      description: this.taskDescription.value as string,
      completed: false
    }

    if (this.taskDescription.errors) {
      this.validationError = "Enter a valid task*"
      return false
    }

    this.clearForm()
    TasksSignal.update(prev => [...prev, newTask])
    return false
  }


  private clearForm() {
    this.validationError = ""
    this.taskDescription.setValue("")
  }
}
