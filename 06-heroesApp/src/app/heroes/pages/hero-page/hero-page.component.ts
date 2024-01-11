import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params // Utilizamos este params para obtener el id
    .pipe(
      delay(3000),
      switchMap( ({ id }) => this.heroesService.getHeroById( id ) ), // Aqui ejecutamos la funcion del service y se le pasa el id desestructurado
    )
    .subscribe( hero => {
      if ( !hero ) return this.router.navigate(['/heroes/list']); // Aqui redirigimos por si hay un url erronea

      this.hero = hero; // Aqui llenamos la property de hero con el heroe encontrado
      // console.log({hero});
      return;
    })
  }



}
