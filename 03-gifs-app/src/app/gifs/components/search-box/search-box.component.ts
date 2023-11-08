import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') // Decorador que hace referencia a un input en especifico
  public tagInput!: ElementRef<HTMLInputElement>; //

  constructor( private gifsService: GifsService ) {}
  // Funcion creada para recibir valor del input
  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value; // constante creada para escuchar el input por medio de el decorador viewchild

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = ''; // Aqui limpiamos el value del input
  }
}
