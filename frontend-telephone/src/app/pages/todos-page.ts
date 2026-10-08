import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

function errorMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) {
      return 'Tidak dapat terhubung ke JSONPlaceholder. Periksa koneksi internet atau kebijakan jaringan.';
    }
    return `Gagal mengambil Todos (HTTP ${error.status}).`;
  }

  return 'Terjadi kesalahan yang tidak diketahui.';
}

@Component({
  selector: 'app-todos-page',
  imports: [CommonModule],
  templateUrl: './todos-page.html',
  styleUrl: './todos-page.css',
})
export class TodosPage implements OnInit {
  todos: Todo[] = [];
  loading = false;
  error = '';

  constructor(
    private readonly todoService: TodoService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.loading = true;
    this.error = '';

    this.todoService.getAll().subscribe({
      next: (data) => {
        this.todos = data;
        this.loading = false;
        this.changeDetector.markForCheck();
      },
      error: (error: unknown) => {
        this.error = errorMessage(error);
        this.loading = false;
        this.changeDetector.markForCheck();
      },
    });
  }
}
