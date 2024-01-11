import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string { // Entre el parentesis del trans... se pone lo que se va a transformar

    if ( !hero.id && !hero.alt_img ) { // Condicion para retornar url de imagen que no existe
      return 'assets/no-image.png';
    }

    if ( hero.alt_img ) return hero.alt_img; // Condicion para retornar url para cuando se añada uno nuevo y venga de otro lado la url de la imagen

    return `assets/heroes/${ hero.id }.jpg`; // return por default de la url de la imagen de un heroe existente
  }

}
