import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../model/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number;
  book: Book;
  customerList: Customer[] = [];

  constructor(private bookService: BookService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.bookId = Number(value.get('bookId'));
    });
    this.bookService.findById(this.bookId).subscribe(value => {
      this.book = value;
      this.bookForm.patchValue(this.book);
    });
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
    this.bookForm = new FormGroup({
      id_book: new FormControl(),
      customer: new FormControl('', [Validators.required]),
      date_start_book: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      deposits: new FormControl('', [Validators.required]),
      interest: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  updateBook(): void {
    const book = this.bookForm.value;
    book.id = this.book.id_book;
    this.bookService.saveBook(book).subscribe(value => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cập nhật thành công!',
        text: 'Soor:' + book.customer.name,
        showConfirmButton: false,
        timer: 2000
      });
    }, error => {

    }, () => {
      this.router.navigateByUrl('/book/list');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
