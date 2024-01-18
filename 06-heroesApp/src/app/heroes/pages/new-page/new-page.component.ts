import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  // iMPORTANTE: El FormGroup, se importa en este caso en el module de la carpeta, luego se importa en el archivo a utilizar
  public heroForm = new FormGroup({
    // Se le pasa un objeto con todos los campos del formulario para el control reactivo del mismo
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }), // El nonNullable true es para decirle al formulario que nunca va a llegar nulo
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string[]>(['']),
    alt_img: new FormControl(''),
  });

  public publishers = [
    // arreglo para mapear las opciones del select
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  onSubmit():void { // Funcion para enviar datos del formulario (?)

    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value,
    });

  }

}
