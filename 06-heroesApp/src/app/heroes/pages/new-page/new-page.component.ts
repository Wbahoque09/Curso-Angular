import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  )
     {}
  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return; // Aqui configuramos el formulario a crear heroes

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id ) ),
      ).subscribe( hero => {

        if ( !hero ) return this.router.navigateByUrl('/'); // Aqui redireccionamos al list (practicamente) si el id no existe

        this.heroForm.reset( hero );
        return;

      })

  }

  // iMPORTANTE: El FormGroup, se importa en este caso en el module de la carpeta, luego se importa en el archivo a utilizar
  public heroForm = new FormGroup({
    // Se le pasa un objeto con todos los campos del formulario para el control reactivo del mismo
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }), // El nonNullable true es para decirle al formulario que nunca va a llegar nulo
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    // arreglo para mapear las opciones del select
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero { // Funcion para convertir el objeto del formulario como un Hero
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit():void { // Funcion para enviar datos del formulario (?)

    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {

      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          // TODO: Mostrar modal con mensaje de actualizacion exitoso
        }) // El subscribe es para disparar la peticion (?)
        return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        // TODO: Mostrar modal con mensaje de inserccion exitoso y navegar a /heroes/edit/hero.id
      })

    // console.log({
    //   formIsValid: this.heroForm.valid,
    //   value: this.heroForm.value,
    // });

  }

}
