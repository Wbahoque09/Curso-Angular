import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, pipe, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

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
    private snackbar: MatSnackBar, // Aqui utilizamos la clase especifica del MatSnackbar
    private dialog: MatDialog, // Se importa el dialog de angular material
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

    if ( this.currentHero.id ) { // Aqui se verifica que el heroe exista
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackbar(`${ hero.superhero } Ha sido actualizado!`); // Se llama el metodo de mostrar anuncio y se le pasa el mensaje
        }) // El subscribe es para disparar la peticion (?)
        return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        // TODO: Mostrar modal con mensaje de inserccion exitoso y navegar a /heroes/edit/hero.id
        this.showSnackbar(`${hero.superhero} Ha sido creado!`);
        this.router.navigate(['/heroes/edit', hero.id]);
      })

    // console.log({
    //   formIsValid: this.heroForm.valid,
    //   value: this.heroForm.value,
    // });

  }

  onDeleteHero():void { // Funcion creada para invocar modal antes de eliminar un heroe
    if ( !this.currentHero.id ) throw Error('Hero id is required'); // Validacion hecha para evitar cualquier error por si no existe el heroe

    const dialogRef = this.dialog.open(ConfirmDialogComponent, { // Aqui en este caso pasamos el ConfirmDialogComponent como 1 arg. y la data en este caso pasamos el formulario
      data: this.heroForm.value,
    });

    /* Segunda Forma optima */
    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id ) ),
        filter( (wasDeleted: boolean) => wasDeleted ),
        // tap( wasDeleted => console.log({ wasDeleted }) ),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });

    /* Primera Forma no optima */
    // dialogRef.afterClosed().subscribe(result => {
    //   if ( !result ) return;

    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //     .subscribe( wasDeleted => {
    //       if ( wasDeleted ) {
    //         this.router.navigate(['/heroes']);
    //       }
    //     }) // Invocamos la funcion de deleteHero y se le pasa el id a eliminar
    // });

  }

  showSnackbar( message: string ):void { // Funcion creada para mostrar anuncio(?)

    this.snackbar.open( message, 'done', { duration: 2500 } ) // Aqui se muestra la notificacion, recibe el mensaje del metodo onSubmit

  }

}
