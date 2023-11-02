import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter():void {
    console.log(this.character);
    if (this.character.name.length === 0) return; // Validacion hecha para salir de la funcion

    this.onNewCharacter.emit(this.character); // Aqui llamamos a la funcion de Emitter para emitir hacia algun lado (?)

    this.character.name = '';
    this.character.power = 0;
  }

}

// EventEmitter: Úselo en componentes con la directiva para emitir eventos personalizados de forma sincrónica o asincrónica
