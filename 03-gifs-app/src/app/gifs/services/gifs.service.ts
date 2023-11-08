import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []; // Propiedad creada para almacenar las busquedas del search

  constructor() { }

  // Get creado para acceder sin modificar los valores de la propiedad original
  get tagsHistory() {
    return [...this._tagsHistory]; // spread operator creado para hacer copia del arreglo (propiedad) original
  }

  // Funcion creada para recibir el valor del input y almacenarlo en la propíedad
  searchTag( tag: string ):void {

    this._tagsHistory.unshift( tag );

  }

}
