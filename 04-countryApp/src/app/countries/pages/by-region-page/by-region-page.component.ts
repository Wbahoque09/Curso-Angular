import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capital';
import { Region } from '../../interfaces/region-type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  public regiones: Capital[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  public isLoading: boolean = false; // Se crea para mostrar el spinner del loading
  public initialValue: string = ''; // Se crea para guardar el valor de busqueda

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region; // Aqui accedemos al arreglo de countries que queda guardado en el tap de searchCapital
    // this.initialValue = this.countriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe((regions) => {
      this.regiones = regions;
    });
  }
}
