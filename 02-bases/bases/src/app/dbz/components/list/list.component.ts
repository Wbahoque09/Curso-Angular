import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); // Emision del evento

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  // onDelete
  onDeleteCharacter( id?: string ): void { // Funcion que manda el index a borrar
    // Emitir el ID del personaje
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }
}
