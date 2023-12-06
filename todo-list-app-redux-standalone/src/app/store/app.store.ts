// Este archivo se crea para "mapear" varios reducers

import { ActionReducerMap } from '@ngrx/store';
import { task, taskReducer } from './task.store';

export interface AppState{ // Interfaz de arrays de task
  tasks: task[]
}

export const appReducers: ActionReducerMap<AppState> = { // Aqui se "mapean" los reducers (?)
  tasks: taskReducer // Aqui se recibe el reducer
}
