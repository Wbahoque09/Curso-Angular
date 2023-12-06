import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import { v4 } from 'uuid';


export interface task{ // Interfaz creada para tipar
  id: string;
  title: string;
  isCompleted: boolean;
}

const initialState: task[] = [
  {
    id: v4(),
    title: '',
    isCompleted: false
  }
]

export const taskReducer = createReducer(initialState) // Se crea el store y se le pasa la propiedad inicial

const selectTaskFeature = createFeatureSelector<task[]>('tasks')

export const selectTask = createSelector(
  selectTaskFeature,
  (state: task[]) => state
)
