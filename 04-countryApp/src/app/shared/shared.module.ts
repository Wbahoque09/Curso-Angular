import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebardComponent } from './components/sidebard/sidebard.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // Se importo el routerModule para que todo el sharedModule conozca las "rutas"
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent, // Este export de HomePageComponent lo hacemos para utilizarlo fuera de este modulo(ModuloShared)
    SearchBoxComponent,
    SidebardComponent,
  ],
})
export class SharedModule {}
