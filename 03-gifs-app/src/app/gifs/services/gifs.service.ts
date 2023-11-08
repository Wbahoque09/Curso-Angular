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

  // Metodo creado para organizar y limitar las busquedas
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();


    this._tagsHistory.unshift(tag); // Aqui insertamos una nueva busqueda
    this._tagsHistory = this._tagsHistory.splice(0,10); // Aqui limitamos la vista a 10

  }

  // Funcion creada para recibir el valor del input y almacenarlo en la propíedad
  searchTag( tag: string ):void {
    if ( tag.length === 0 ) return;

    this.organizeHistory(tag);

    // this._tagsHistory.unshift( tag );

  }

}
