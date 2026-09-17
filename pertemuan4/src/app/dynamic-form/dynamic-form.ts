import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm {
  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),

    skills: new FormArray([new FormControl('', Validators.required)]),
  });

  get skills() {
    return this.studentForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Data berhasil dikirim');
      console.log(this.studentForm.value);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}
