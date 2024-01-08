import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ), // el loadCh.. es la carga perezosa, es una funcion donde se asigna una promesa.
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full' // Esto es para que coincida el path '' al 100%
  },
  {
    path: '**', // Este path es para que cualquiera ruta diferente a las anteriores se redireccione con el redire.. al 404 en este caso
    redirectTo: '404',
  }
]; // Router principal de la app (?)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
