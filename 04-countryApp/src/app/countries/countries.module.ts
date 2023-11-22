import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryNtableComponent } from './components/country-ntable/country-ntable.component';
import { RegionTableComponent } from './components/region-table/region-table.component';




@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    CountryNtableComponent,
    RegionTableComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule, // Aqui conectamos el routing.module para el module de countries
    SharedModule, // Se importa el sharedModule para tener acceso a sus components
  ]
})
export class CountriesModule { }
