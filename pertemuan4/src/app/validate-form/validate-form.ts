import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-form',
  imports: [ReactiveFormsModule],
  templateUrl: './validate-form.html',
  styleUrl: './validate-form.css',
})
export class ValidateForm {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    age: new FormControl('', [Validators.required, Validators.min(17), Validators.max(60)]),
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form berhasil dikirim');
      console.log(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
