import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output() // Metodo para emitir eventos de un padre hacia el hijo (?)
   public onListenChild = new EventEmitter<string>(); // Con esto emito eventos desde el padre hacia el hijo (?)

  emitValue( value: string ): void {
    this.onListenChild.emit( value );
  }

}
