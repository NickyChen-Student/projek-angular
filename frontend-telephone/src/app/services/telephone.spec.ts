import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { Telephone, TelephonePayload } from '../models/telephone';
import { TelephoneService } from './telephone.service';

describe('TelephoneService', () => {
  let service: TelephoneService;
  let httpTestingController: HttpTestingController;

  const telephone: Telephone = {
    id: 7,
    nama_user: 'Test User',
    alamat: 'Test Address',
    no_telp: '081234567890',
    kode_post: '12345',
    date_time: null,
  };
  const payload: TelephonePayload = {
    nama_user: telephone.nama_user,
    alamat: telephone.alamat,
    no_telp: telephone.no_telp,
    kode_post: telephone.kode_post,
    date_time: telephone.date_time,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TelephoneService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets all telephones', () => {
    service.getAll().subscribe((data) => expect(data).toEqual([telephone]));

    const request = httpTestingController.expectOne('https://localhost:7033/api/Telephone');
    expect(request.request.method).toBe('GET');
    request.flush([telephone]);
  });

  it('gets a telephone by id', () => {
    service.getById(telephone.id).subscribe((data) => expect(data).toEqual(telephone));

    const request = httpTestingController.expectOne('https://localhost:7033/api/Telephone/7');
    expect(request.request.method).toBe('GET');
    request.flush(telephone);
  });

  it('creates a telephone with the model payload', () => {
    service.create(payload).subscribe((data) => expect(data).toEqual(telephone));

    const request = httpTestingController.expectOne('https://localhost:7033/api/Telephone');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(payload);
    request.flush(telephone);
  });

  it('updates a telephone with the model payload', () => {
    service.update(telephone.id, payload).subscribe();

    const request = httpTestingController.expectOne('https://localhost:7033/api/Telephone/7');
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(payload);
    request.flush(null);
  });

  it('deletes a telephone by id', () => {
    service.delete(telephone.id).subscribe();

    const request = httpTestingController.expectOne('https://localhost:7033/api/Telephone/7');
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
