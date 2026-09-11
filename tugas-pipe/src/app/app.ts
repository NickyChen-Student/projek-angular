import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RupiahPipe } from './pipes/rupiah-pipe';
import { CategoryPipe } from './pipes/category-pipe';
import { AmountColorDirective } from './directives/amount-color';
import { Expense } from './models/expense.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RupiahPipe, CategoryPipe, AmountColorDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  expenses: Expense[] = [
    { title: 'Beli Beras', category: 'food', amount: 200000 },
    { title: 'Bayar Internet', category: 'utility', amount: 500000 },
    { title: 'Nonton Bioskop', category: 'entertainment', amount: 150000 },
  ];

  newExpense: Expense = {
    title: '',
    category: 'food',
    amount: 0,
  };

  categories = [
    { value: 'food', label: 'Food' },
    { value: 'utility', label: 'Utility' },
    { value: 'entertainment', label: 'Entertainment' },
  ];

  addExpense(): void {
    if (!this.newExpense.title.trim() || this.newExpense.amount <= 0) {
      return;
    }
    this.expenses.push({ ...this.newExpense });
    this.newExpense = { title: '', category: 'food', amount: 0 };
  }

  removeExpense(index: number): void {
    this.expenses.splice(index, 1);
  }

  get totalAmount(): number {
    return this.expenses.reduce((sum, item) => sum + item.amount, 0);
  }

  get averageAmount(): number {
    if (this.expenses.length === 0) return 0;
    return this.totalAmount / this.expenses.length;
  }
}
