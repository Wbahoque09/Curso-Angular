import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  // standalone: true,
  templateUrl: `./lazy-image.component.html`,
  styleUrls: ['./lazyImage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string; // Url que tiene la imagen, se guarda aqui

  @Input()
  public alt: string = ''; // Property creada para manejar de forma dinamica el texto alternativo

  public hasLoaded: boolean = false; // Property creada para manejar el estado de cuando mostrar o no las imagenes

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad(): void { // Funcion creada para mostrar la imagen
    this.hasLoaded = true;
  }
}
