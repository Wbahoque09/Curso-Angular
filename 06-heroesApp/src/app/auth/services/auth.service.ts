import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

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

  login( email: string, password: string ):void {

    // http.post'login',{ email, password })

    this.http

  }

}
