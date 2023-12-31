import { Component, Input } from '@angular/core';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'countries-country-ntable',
  templateUrl: './country-ntable.component.html',
  styles: [
    `
    img {
      width: 25px;
    }
    `,
  ],
})
export class CountryNtableComponent {
  @Input()
  public countries: Capital[] = [];
}
