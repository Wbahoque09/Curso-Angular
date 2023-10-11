import { Component } from '@angular/core';
import { setupCounter } from '../../../../01-typescript-intro/01-typescript-intro/src/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;

  }

  resetCounter(): void {
    this.counter = 10;
  }

}
