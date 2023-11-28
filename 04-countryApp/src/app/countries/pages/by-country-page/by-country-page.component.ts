import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {

  public countries: Capital[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCounrty( term: string ): void {
    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
    })
  }
}
