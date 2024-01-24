import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  Route,
  Router,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

 export const isLogged: CanActivateFn = (
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
 ) => {
   const router = inject(Router);
   const authService = inject(AuthService)
     .chechAuthentication()
     .pipe(
       tap((isAuthenticated) => {
         if (isAuthenticated) {
           router.navigateByUrl('/heroes/list');
         }
       }),
       map(isAuthenticated => !isAuthenticated)
     );
   // console.log('Can Active');
   // console.log({ route, state });
   return authService;
 };
