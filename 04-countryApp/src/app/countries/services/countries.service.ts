import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Capital } from '../interfaces/capital';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region-type';


@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = { // Este cacheStore se crea para malmacenar la data
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage(); // Aqui se carga la funcion del llamado del localStorage, esto carga apenas se inicia el componente
  }

  private saveToLocalStorage() { // Metodo para guardar las peticiones en los observables
    localStorage.setItem('cacheStore', JSON.stringify( this.cacheStore ));
  }

  private loadFromLocalStorage() { // Metodo para mostrar las peticiones en los observables
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

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
        tap( countries => this.cacheStore.byCapital = { term, countries }), // Aqui guardamos en un array los paises y la busqueda que se consulto, se tipa con las interfaces correspondientes
        tap( () => this.saveToLocalStorage() ), // En este punto de la app este tap se hace para guardar lo que haya en localStorage
      );
  }

  searchCountry(term: string): Observable<Capital[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCountries = { term, countries })),
      tap(() => this.saveToLocalStorage()) // En este punto de la app este tap se hace para guardar lo que haya en localStorage
    );
  }

  searchRegion(region: Region): Observable<Capital[]> {
    const url = `${this.apiUrl}/region/${region}`;
    // return this.http.get<Capital[]>(url).pipe(
    //   catchError((err) => {
    //     return of([]);
    //   })
    // );
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage()) // En este punto de la app este tap se hace para guardar lo que haya en localStorage
    );
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
