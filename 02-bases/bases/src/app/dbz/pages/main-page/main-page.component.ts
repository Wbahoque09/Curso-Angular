import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter( character: Character ): void { // Funcion creada para agregar un nuevo elemento al arreglo, se le pasa tipado el parametro
    this.characters.push(character); // Se agrega al arreglo un nuevo elemento
  }

  onDeleteCharacter( index: number ): void { // Funcion creada para eliminar un elemento del arreglo
    this.characters.splice(index,1);
  }
}
