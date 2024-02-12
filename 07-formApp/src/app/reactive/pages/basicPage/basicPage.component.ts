import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './basicPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
  // public myForm: FormGroup = new FormGroup({ Forma tradicional de hacerlo
  //   name: new FormControl('', [],[]),
  //   price: new FormControl('', [],[]),
  //   inStorage: new FormControl('', [],[]),
  // })

  private form = inject(FormBuilder); // Nueva forma de inyectar y no por constructor.

  public myForm: FormGroup = this.form.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  })

  onSave():void {

    if ( this.myForm.invalid ) return;

    console.log(this.myForm.value);
  }


 }


/**
 * PRIMER ARGUMENTO: VALOR DEL INPUT (?)
 * SEGUNDO ARGUMENTO: VALIDACIONES SINCRONAS
 * TERCER ARGUMENTO: VALIDACIONES ASINCRONAS
 */
