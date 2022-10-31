import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book[] = [];
  bookNameDelete: string;
  private bookIdDelete: number;
  private mess: string;

  bookNameSearch: '';

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(value => {
      this.book = value;
    }, error => {
    }, () => {
    });
  }

  getInfoBookDelete(name: string, id: number) {
    this.bookNameDelete = name;
    this.bookIdDelete = id;
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.bookIdDelete).subscribe(() => {
      Swal.fire({
        title: 'Xóa thành công!',
        text: 'Số sổ :' + this.bookIdDelete,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
    });
  }

  searchByMore(): void {
    this.bookService.getAll().subscribe(value => {
      this.book = value.filter(item => item.customer.name.toLowerCase().includes(this.bookNameSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
    });
  }

}
