import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError( field: string ): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}


/**
 * PRIMER ARGUMENTO: VALOR DEL INPUT (?)
 * SEGUNDO ARGUMENTO: VALIDACIONES SINCRONAS
 * TERCER ARGUMENTO: VALIDACIONES ASINCRONAS
 */
