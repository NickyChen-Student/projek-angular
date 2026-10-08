import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('gets todos from JSONPlaceholder', () => {
    const todos = [{ id: 1, userId: 1, title: 'Test todo', completed: false }];
    service.getAll().subscribe((data) => expect(data).toEqual(todos));

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/todos/');
    expect(request.request.method).toBe('GET');
    request.flush(todos);
  });
});
