import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Capital } from '../interfaces/capital';
import { CacheStore } from '../interfaces/cache-store.interface';


@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = { // Este cacheStore se crea para malmacenar la data
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private http: HttpClient) {}

  private getCountriesRequest( url: string ): Observable<Capital[]> { // Se crea esta funcion para la peticion
    return this.http.get<Capital[]>(url)
    .pipe(
      catchError( () => of([]) ),
      // delay(2000),
    )
  }

  searchCapital(term: string): Observable<Capital[]> {
    // El observable es para tipado de peticiones (?)
    const url = `${this.apiUrl}/capital/${term}`;
    // return this.http.get<Capital[]>(url).pipe(
      // El pipe es otro observable y con el tenemos acceso a varios metodos
      // catchError((err) => {
        // console.log(err);

        // return of([]);
     // })  El catchError atrapa un error en la peticion
    // );
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries }) // Aqui guardamos en un array los paises y la busqueda que se consulto, se tipa con las interfaces correspondientes
      );
  }

  searchCountry(term: string): Observable<Capital[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term, countries })
    )
  }

  searchRegion(term: string): Observable<Capital[]> {
    const url = `${this.apiUrl}/region/${term}`;
    // return this.http.get<Capital[]>(url).pipe(
    //   catchError((err) => {
    //     return of([]);
    //   })
    // );
    return this.getCountriesRequest(url);
  }

  searchCountryAlphaCode(code: string): Observable<Capital | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Capital[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError((err) => {
        return of(null);
      })
    );
  }

  // searchRegion(term: string): Observable<Country[]> {

  // }
}
