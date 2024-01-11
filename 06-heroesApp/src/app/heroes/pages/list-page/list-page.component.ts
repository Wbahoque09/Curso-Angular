import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = []; // Arreglo de heroes creado para almacenar toda la info de heroes

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes() // el heroesService es el que esta en los () del constructor, y se accede a una funcion del Services
    .subscribe( heroes => this.heroes = heroes ) // En la susbcripcion creamos un nombr de variable "X" y llenamos el arreglo de heroes
  }
}
