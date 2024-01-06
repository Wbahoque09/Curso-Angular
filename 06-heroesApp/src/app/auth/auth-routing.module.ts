import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; // Aqui es donde se van a cargar o renderizar las rutas del auth

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule,
  ],

})
export class AuthRoutingModule { }
