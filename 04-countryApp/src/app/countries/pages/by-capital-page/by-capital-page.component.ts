import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capital';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Capital[] = [];
  public isLoading: boolean = false; // Se crea para mostrar el spinner del loading

  constructor( private countriesService: CountriesService ) {}

  searchByCapital( term:string ): void {
    this.isLoading = true;
    this.countriesService.searchCapital( term )
    .subscribe( countries => { // El suscribe sirve para detectar peticiones
      this.countries = countries; // Aqui se llena el array con los resultados de la peticion
      this.isLoading = false;
    })
  }

}
