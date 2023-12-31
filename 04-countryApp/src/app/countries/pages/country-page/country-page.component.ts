import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Capital;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}
  ngOnInit(): void {
    // Primera Forma
    // this.activatedRoute.params
    // .subscribe( ({id}) => { // Aqui traemos la respuesta
    //   this.countriesService.searchCountryAlphaCode( id )
    //   .subscribe( country => { // En este subscribe tenemos el pais despues de esperar la respuesta del anterior subscribe
    //     console.log({ country });
    //   })
    // })
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryAlphaCode(id) ),
      )
      .subscribe( country => {
        if (!country) return this.router.navigateByUrl(''); // Se retorna a la pagina principal

        return this.country = country; // Se llena la variable del pais
        // console.log('TENEMOS UN PAIS');
      });
  }



}
