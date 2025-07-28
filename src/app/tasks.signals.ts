import { signal } from "@angular/core";
import { Task } from "./models/Task.model";

export const TasksSignal = signal<Task[]>([])