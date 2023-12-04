import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capital';
import { Region } from '../../interfaces/region-type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public regiones: Capital[] = [];
  public regions: Region[] = [
    'Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe((regions) => {
      this.regiones = regions;
    });
  }
}
