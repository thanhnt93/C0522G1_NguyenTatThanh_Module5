import {Customer} from './customer';

export interface Book {
  id_book?: number;
  customer?: Customer;
  date_start_book?: string;
  start_date?: string;
  period?: string;
  deposits?: number;
  interest?: string;
  description?: string;
}
