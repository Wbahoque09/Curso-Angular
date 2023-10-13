import { Component } from '@angular/core';


@Component({ // Se declara decorador
  selector: 'app-counter', // El selector es para seleccionar esta clase en otro componente(?)
  template: `
    <h3> Counter: {{ counter }} </h3>

    <button (click)="increaseBy( +1 )" >+1</button>
    <button (click)="resetCounter()" >Reset</button>
    <button (click)="increaseBy( -1 )" >-1</button>
  `, // Template siempre se declara, es literal la parte del html
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;

  }

  resetCounter(): void {
    this.counter = 10;
  }
  constructor() {}

  ngOnInit() {}

}
