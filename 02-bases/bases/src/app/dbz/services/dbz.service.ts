import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    // Funcion creada para agregar un nuevo elemento al arreglo, se le pasa tipado el parametro

    const newCharacter: Character = { id: uuid(), ...character }; // Se aplica un spread operator para agregar el id y no se pierda lo demas

    this.characters.push(newCharacter); // Se agrega al arreglo un nuevo elemento
  }

  // onDeleteCharacter(index: number): void {
  // Funcion creada para eliminar un elemento del arreglo
  deleteCharacterById(id:string): void {
    // this.characters.splice(index, 1);
    this.characters = this.characters.filter( character => character.id !== id );
  }
  constructor() {}
}
