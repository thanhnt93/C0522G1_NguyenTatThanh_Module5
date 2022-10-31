import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = 'http://localhost:3000/book';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL);
  }

  saveBook(book: Book): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + book.id_book, book);
  }

  findById(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(this.API_URL + '/' + bookId);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(this.API_URL + '/' + id);
  }
}
