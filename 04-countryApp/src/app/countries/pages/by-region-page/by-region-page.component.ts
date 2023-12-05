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
  public regiones: Capital[] = []; // Aqui guardamos los resulatdos de la peticion en un array
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  public isLoading: boolean = false; // Se crea para mostrar el spinner del loading


  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void { // El ngOnInit se costruye con el componente
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region; // Aqui accedemos al arreglo de countries que queda guardado en el tap de searchCapital
    this.regiones = this.countriesService.cacheStore.byRegion.countries; // Se llena la region con la busqueda
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe((regions) => {
      this.regiones = regions;
      this.isLoading = false;
    });
  }
}
