import { Component, signal } from '@angular/core';
import { ValidateForm } from './validate-form/validate-form';
import { DynamicForm } from './dynamic-form/dynamic-form';
import { CrossFieldValidator } from './cross-field-validator/cross-field-validator';

@Component({
  selector: 'app-root',
  imports: [ValidateForm, DynamicForm, CrossFieldValidator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
