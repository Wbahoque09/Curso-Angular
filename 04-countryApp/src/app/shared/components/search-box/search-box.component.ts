import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>(); // El Subject es un observable que ya contiene los pipes y suscribe (?)

  @Input()
  public placeholder: string = '';

  @Output() // Metodo para emitir eventos de un padre hacia el hijo (?)
  public onListenChild = new EventEmitter<string>(); // Con esto emito eventos desde el padre hacia el hijo (?)

  @Output() // Metodo para emitir eventos de un padre hacia el hijo (?)
  public onDebounce = new EventEmitter<string>(); // Con esto emito eventos desde el padre hacia el hijo (?)

  ngOnInit(): void {
    this.debouncer
      .pipe(
        // Averiguar mas sobre los pipes
        debounceTime(300) // Esto creo que es para dar un tiempo
      )
      .subscribe((value) => {
        // El debouncer aqui se encarga de hacer las emiciones
        // console.log('debouncer value', value);
        this.onDebounce.emit( value );
      });
  }

  emitValue(value: string): void {
    this.onListenChild.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
