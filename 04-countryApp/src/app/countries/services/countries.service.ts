import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Capital } from '../interfaces/capital';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region';


@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(term: string): Observable<Capital[]> {
    // El observable es para tipado de peticiones (?)
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Capital[]>(url).pipe(
      // El pipe es otro observable y con el tenemos acceso a varios metodos
      catchError((err) => {
        console.log(err);

        return of([]);
      }) // El catchError atrapa un error en la peticion
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((err) => {
        return of([]);
      })
    )
  }

  searchRegion(term: string): Observable<Region[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Region[]>(url).pipe(
      catchError((err) => {
        return of([])
      })
    )
  }

  // searchRegion(term: string): Observable<Country[]> {

  // }

}
