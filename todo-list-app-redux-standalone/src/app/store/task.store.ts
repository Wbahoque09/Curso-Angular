import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { v4 } from 'uuid';


export interface task{ // Interfaz creada para tipar
  id: string;
  title: string;
  isCompleted: boolean;
}

const initialState: task[] = [
  {
    id: v4(),
    title: 'Example (?)',
    isCompleted: false
  }
]

export const addTask = createAction('[TASK] addTask', props<{ title: string }>()) // Accion creada para añadir tareas (?)
export const markTaskAsCompleted = createAction(
  '[TASK] markTaskAsCompleted',
  props<{ id: string }>()
); // Accion creada para marcar tareas como completadas (?)
export const removeTask = createAction('[TASK] removeTask', props<{ id: string }>()); // Accion creada para eliminar tareas (?)
export const resetAllTasks = createAction('[TASK] resetAllTasks'); // Accion creada para hacer un reset a todas las tareas marcadas (?)
export const removeAllTasks = createAction('[TASK] removeAllTasks'); // Accion creada para borrar todas las tareas marcadas (?)

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { title }) => [
    ...state,
    { title, isCompleted: false, id: v4() },
  ]), // Averiguar on(?), Se desestructura para guardar los task e ir almacenando.
  on(markTaskAsCompleted, (state, {id}) => (state.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return task;
  })) ),
  on(removeTask, (state, {id}) => (state.filter((task) => task.id != id))),
  on(resetAllTasks, (state) => state.map((task) => ({...task, isCompleted: false}))),
  on(removeAllTasks, (state) => (state.filter((task) => !task.isCompleted)))
); // Se crea el store y se le pasa la propiedad inicial

const selectTaskFeature = createFeatureSelector<task[]>('tasks'); // Se crea un selector para hacer referencia a algo (?)

export const selectTask = createSelector( // variable creada para la seleccion de las task (Entiendo que es tener una o mas task seleccionada (?))
  selectTaskFeature,
  (state: task[]) => state
)


// Aca estan los reducers (?), y antes de estos se van a crear las acciones
// on = Es para registrar acciones nuevas en el reducer (Asi funciona en este caso).
