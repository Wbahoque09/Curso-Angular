import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public regiones: Region[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe((regions) => {
      this.regiones = regions;
    });
  }
}
