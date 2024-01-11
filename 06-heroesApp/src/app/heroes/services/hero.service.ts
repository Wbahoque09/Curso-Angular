
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HeroesService {

  private baseUrl: string = environments.baseUrl; // Se importa del archivo environments la constante de la baseUrl para la peticion y se declara en una variable privada

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> { // La funcion tiene como tipado el Observable porque es para hacer las peticiones

    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`); // Aqui se hace la peticion para obtener los Heroes

  }

  getHeroById( id: string ): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${ id }`) // Peticion de heroe por id
    .pipe(
      catchError( error => of(undefined)) // catchError para mostrar error o undefined en caso de que el id consultado no exista
    );
  }

}
