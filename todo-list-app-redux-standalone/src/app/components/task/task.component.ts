import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { markTaskAsCompleted, removeTask, task } from 'src/app/store/task.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  task!: task; // Se crea para pasar la task
  store = inject(Store);

  markAsCompleted(): void {
    // Funcion creada para marcar una tarea como hecha
    this.store.dispatch(markTaskAsCompleted({ id: this.task.id }));
  }

 removeTask(): void {
    // Funcion creada para eliminar una tarea
    this.store.dispatch(removeTask({ id: this.task.id }));
  }
}
