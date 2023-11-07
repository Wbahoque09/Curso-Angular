import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  // Se accede al service dbz con metodos get y funciones que no retornan nada

  get characters(): Character[] {
    return [...this.dbzService.characters]; // Spread Operator utilizado para hacer una copia del objeto original y no modificar el original
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id ); // Desde aqui eliminamos por ID un elemento del array
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character ); // Se añaden nuevos elementos a la lista
  }

}
