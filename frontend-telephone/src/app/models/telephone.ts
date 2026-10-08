export interface Telephone {
  id: number;
  nama_user: string;
  alamat: string;
  no_telp: string;
  kode_post: string;
  date_time: string | null;
}

export type TelephonePayload = Omit<Telephone, 'id'>;
