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

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state,{ title }) => ([...state, { title, isCompleted: false, id: v4() }])) // Averiguar on(?), Se desestructura para guardar los task e ir almacenando.
) // Se crea el store y se le pasa la propiedad inicial

const selectTaskFeature = createFeatureSelector<task[]>('tasks'); // Se crea un selector para hacer referencia a algo (?)

export const selectTask = createSelector(
  selectTaskFeature,
  (state: task[]) => state
)


// Aca estan los reducers (?), y antes de estos se van a crear las acciones
