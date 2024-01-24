import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map, of, tap } from 'rxjs';

import { environments } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser():User|undefined { // Funcion creada para guardar el usuario logeado(?)
    if ( !this.user ) return undefined;
    return structuredClone( this.user );
  }

  login( email: string, password: string ):Observable<User> { // Funcion creada para obtener datos del usuario

    // http.post'login',{ email, password })

    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem('token', 'u8edfhuidhsfudsfhdsuofh54156sfs' ))
      );

  }

  chechAuthentication(): Observable<boolean> { // Funcion para comprobar autenticacion del usuario

    if ( !localStorage.getItem('token') ) return of(false); // Aqui se sale de la funcion si no hay nada en el localStorage

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of(false) )
      );

  }

  logout(): void { // Funcion creada para cerrar la sesion
    this.user = undefined; // Se deja undefined al usuario
    localStorage.clear(); // Se limpia el localStorage
  }

}
