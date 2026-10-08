import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Telephone, TelephonePayload } from '../models/telephone';
import { TelephoneService } from '../services/telephone.service';

function emptyTelephone(): TelephonePayload {
  return {
    nama_user: '',
    alamat: '',
    no_telp: '',
    kode_post: '',
    date_time: null,
  };
}

function errorMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) {
      return 'Tidak dapat terhubung ke API. Periksa backend, sertifikat HTTPS, dan konfigurasi CORS.';
    }

    const serverMessage =
      typeof error.error === 'object' && error.error !== null && 'message' in error.error
        ? String(error.error.message)
        : '';
    return serverMessage || `Permintaan gagal (HTTP ${error.status}).`;
  }

  return 'Terjadi kesalahan yang tidak diketahui.';
}

@Component({
  selector: 'app-telephone-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './telephone-page.html',
  styleUrl: './telephone-page.css',
})
export class TelephonePage implements OnInit {
  telephones: Telephone[] = [];
  telephone = emptyTelephone();
  editingId: number | null = null;
  detailTelephone: Telephone | null = null;
  loading = false;
  saving = false;
  detailLoadingId: number | null = null;
  error = '';
  message = '';
  detailError = '';

  constructor(
    private readonly telephoneService: TelephoneService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error = '';

    this.telephoneService.getAll().subscribe({
      next: (data) => {
        this.telephones = data;
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

  loadById(id: number): void {
    this.detailTelephone = null;
    this.detailError = '';
    this.detailLoadingId = id;

    this.telephoneService.getById(id).subscribe({
      next: (data) => {
        this.detailTelephone = data;
        this.detailLoadingId = null;
        this.changeDetector.markForCheck();
      },
      error: (error: unknown) => {
        this.detailError = errorMessage(error);
        this.detailLoadingId = null;
        this.changeDetector.markForCheck();
      },
    });
  }

  edit(telephone: Telephone): void {
    this.editingId = telephone.id;
    this.telephone = {
      nama_user: telephone.nama_user,
      alamat: telephone.alamat,
      no_telp: telephone.no_telp,
      kode_post: telephone.kode_post,
      date_time: telephone.date_time ? telephone.date_time.slice(0, 16) : null,
    };
    this.message = '';
    this.error = '';
  }

  cancelEdit(): void {
    this.editingId = null;
    this.telephone = emptyTelephone();
    this.message = '';
  }

  save(): void {
    this.saving = true;
    this.error = '';
    this.message = '';
    const wasEditing = this.editingId !== null;

    const request: Observable<unknown> =
      this.editingId === null
        ? this.telephoneService.create(this.telephone)
        : this.telephoneService.update(this.editingId, this.telephone);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.cancelEdit();
        this.message = wasEditing
          ? 'Telephone berhasil diperbarui.'
          : 'Telephone berhasil ditambahkan.';
        this.loadData();
        this.changeDetector.markForCheck();
      },
      error: (error: unknown) => {
        this.error = errorMessage(error);
        this.saving = false;
        this.changeDetector.markForCheck();
      },
    });
  }

  remove(telephone: Telephone): void {
    if (!window.confirm(`Hapus Telephone milik ${telephone.nama_user}?`)) {
      return;
    }

    this.error = '';
    this.message = '';
    this.telephoneService.delete(telephone.id).subscribe({
      next: () => {
        if (this.editingId === telephone.id) {
          this.cancelEdit();
        }
        this.message = 'Telephone berhasil dihapus.';
        this.loadData();
        this.changeDetector.markForCheck();
      },
      error: (error: unknown) => {
        this.error = errorMessage(error);
        this.changeDetector.markForCheck();
      },
    });
  }
}
