
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {

  private baseUrl: string = environments.baseUrl; // Se importa del archivo environments la constante de la baseUrl para la peticion y se declara en una variable privada

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> { // La funcion tiene como tipado el Observable porque es para hacer las peticiones

    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`); // Aqui se hace la peticion para obtener los Heroes

  }
}
