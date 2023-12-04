import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Capital[] = [];
  public isLoading: boolean = false; // Se crea para mostrar el spinner del loading
  public initialValue: string = ''; // Se crea para guardar el valor de busqueda

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCounrty(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
    .subscribe((countries) => {
      this.countries = countries;
      this.isLoading= false;
    });
  }
}
