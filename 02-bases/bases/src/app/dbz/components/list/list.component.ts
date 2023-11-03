import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter(); // Emision del evento

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  // onDelete
  onDeleteCharacter(index: number): void { // Funcion que manda el index a borrar
    // Emitir el ID del personaje
    console.log(index);
    this.onDelete.emit(index);
  }
}
