import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [],
})
export class SearchPageComponent {
  public searchInput = new FormControl(''); // property para controlar lo que tenga el input (?)
  public heroes: Hero[] = []; // property para guardar informacion de los heroes traidos en la peticion
  public selectedHero?: Hero; // property para guardar la opcion del heroe seleccionado en el input, agregar otra funcionalidad (?)

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || ''; // esto se hace con dos valores porque el input en algun momento puede ser null

    this.heroesService
      .getSuggestions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption( event: MatAutocompleteSelectedEvent ):void { // Funcion para agregar opcion escogida en el select al select

    if ( !event.option.value ) { // Se verifica que exista el event
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value; // Se crea variable para almacenar el objeto (tiene toda la info) del heroe
    this.searchInput.setValue( hero.superhero ); // Se actualiza el valor a mostrar en el input

    this.selectedHero = hero; // Se le pasa el objeto a la property

  }
}
