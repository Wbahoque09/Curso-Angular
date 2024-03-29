import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Store } from '@ngrx/store';
import { removeAllTasks, resetAllTasks, selectTask } from 'src/app/store/task.store';
import { addTask } from '../../store/task.store';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  store = inject(Store); // Inyeccion de dependencias, como en el constructor
  tasks = this.store.selectSignal(selectTask); // Aqui almacenamos la informacion de las task seleccionadas (?) || Aqui se obtiene todas las task creadas
  formCtrl = new FormControl('', [ // Validador de formulario
    Validators.required,
    Validators.minLength(5),
  ]);

  addTask(): void { // Funcion creada para añadir task
    this.store.dispatch(addTask({ title: this.formCtrl.value ?? '' }));
    this.formCtrl.setValue(null); // Para resetear el input html(?)
  }

  resetTask(): void { // Funcion creada para desmarcar las task
    this.store.dispatch(resetAllTasks());
  }

  removeAllTask(): void { // Funcion creada para borrar una task
    this.store.dispatch(removeAllTasks());
  }
}

// El dispatch nos permite llamar acciones
