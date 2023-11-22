import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
    img {
      width: 25px;
    }
    `
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Capital[] = [];

}
