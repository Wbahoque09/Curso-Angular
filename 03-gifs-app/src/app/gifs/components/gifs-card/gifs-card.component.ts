import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css'],
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void { // Ciclo de vida utilizado para lanzar error en caso de que no haya ninguna busqueda
    if ( !this.gif ) throw new Error('Gif property is required');
  }

}
