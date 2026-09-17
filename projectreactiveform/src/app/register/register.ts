import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password')?.value;

    const passwordConfirmation = control.get('passwordConfirmation')?.value;

    if (password !== passwordConfirmation) {
      return { passwordMismatch: true };
    }

    return null;
  };

  dynamicFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
  ];

  submittedData: any = null;

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.value;

    this.submittedData = {
      firstName: this.capitalizeWords(formValue.firstName ?? ''),
      lastName: this.capitalizeWords(formValue.lastName ?? ''),
      email: formValue.email?.toLowerCase() ?? '',
      address: formValue.address ?? '',
      rt: formValue.rt ?? '',
      rw: formValue.rw ?? '',
      kecamatan: formValue.kecamatan ?? '',
      kelurahan: formValue.kelurahan ?? '',
      gender: formValue.gender ?? '',
      reasonJoin: formValue.reasonJoin ?? '',
    };
  }

  onReset() {
    this.registerForm.reset();

    this.submittedData = null;
  }

  capitalizeWords(value: string): string {
    return value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }

  registerForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),

      lastName: new FormControl('', Validators.required),

      email: new FormControl('', [Validators.required, Validators.email]),

      address: new FormControl('', Validators.required),

      rt: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),

      rw: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),

      kecamatan: new FormControl('', Validators.required),

      kelurahan: new FormControl('', Validators.required),

      gender: new FormControl('', Validators.required),

      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      passwordConfirmation: new FormControl('', Validators.required),

      reasonJoin: new FormControl('', Validators.required),
    },

    {
      validators: this.passwordMatchValidator,
    },
  );
}
