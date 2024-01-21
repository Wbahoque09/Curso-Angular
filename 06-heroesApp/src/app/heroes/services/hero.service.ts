
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl; // Se importa del archivo environments la constante de la baseUrl para la peticion y se declara en una variable privada

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    // La funcion tiene como tipado el Observable porque es para hacer las peticiones

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`); // Aqui se hace la peticion para obtener los Heroes
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`) // Peticion de heroe por id
      .pipe(
        catchError((error) => of(undefined)) // catchError para mostrar error o undefined en caso de que el id consultado no exista
      );
  }

  getSuggestions(term: string): Observable<Hero[]> {
    // Funcion creada para la busqueda de un heroe
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=5`); // Aqui se hace la peticion para hacer la busqueda
  }

  addHero(hero: Hero): Observable<Hero> {
    // Peticion para añadir heroe
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero); // Se le pasa el hero recibido como un objeto (?)
  }

  updateHero(hero: Hero): Observable<Hero> {
    // Peticion para actualizar heroe con el metodo path
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero); // Se le pasa el hero recibido como un objeto (?) ademas se busca el id para ???
  }

  deleteHeroById( id: string ): Observable<boolean> {
    // Peticion para eliminar heroe con el metodo delete
    return this.http.delete(`${this.baseUrl}/heroes/${ id }`) // Se le pasa el id para encontrar el heroe a eliminar
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      )
  }
}
