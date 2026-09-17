import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cross-field-validator',
  imports: [ReactiveFormsModule],
  templateUrl: './cross-field-validator.html',
  styleUrl: './cross-field-validator.css',
})
export class CrossFieldValidator {
  passwordForm = new FormGroup(
    {
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: passwordMatchValidator(),
    },
  );

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Password berhasil dibuat');
      console.log(this.passwordForm.value);
    } else {
      this.passwordForm.markAllAsTouched();
    }
  }
}

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return {
        passwordMismatch: true,
      };
    }

    return null;
  };
}
