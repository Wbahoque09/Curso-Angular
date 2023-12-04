import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capital';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Capital[] = [];
  public isLoading: boolean = false; // Se crea para mostrar el spinner del loading
  public initialValue: string = ''; // Se crea para guardar el valor de busqueda

  constructor( private countriesService: CountriesService ) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries; // Aqui accedemos al arreglo de countries que queda guardado en el tap de searchCapital
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term:string ): void {
    this.isLoading = true;
    this.countriesService.searchCapital( term )
    .subscribe( countries => { // El suscribe sirve para detectar peticiones
      this.countries = countries; // Aqui se llena el array con los resultados de la peticion
      this.isLoading = false;
    })
  }

}
