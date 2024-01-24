import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';


export const isAuthenticated: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  console.log('Can Match');
  console.log({ route, segments });
  return true;
};


 export const isActivated: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const router = inject(Router); // inyeccion de la libreria de rutas
    const authService = inject(AuthService).chechAuthentication() // Peticion sin suscripcion de la autenticacion
      .pipe( // Creo que con el pipe verificamos un estado (?)
        tap( isAuthenticated => { // con el tap hacemos la logica para navegar hacia otro sitio o no.
          if ( !isAuthenticated ) {
            router.navigateByUrl('/auth/login');
          }
        })
      )
    // console.log('Can Active');
    // console.log({ route, state });
    return authService;
}

// Investigar mas sobre rxjs y sus operadores
