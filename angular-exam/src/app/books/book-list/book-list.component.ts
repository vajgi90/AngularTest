import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book.model';
import { Newspaper } from '../newspaper.model';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  subs: Subscription;

  private books = [
    new Book('Stars from Eger', 'The revenge of Jumurdzsák'),
    new Book('Boys from Pál street', 'RIP Nemecsek'),
    new Book('Sons of a man with stone heart', '')
  ];

  private tempBooks: Book[];

  private newspapers = [
    new Newspaper('Blikk'),
    new Newspaper('Népszabadság'),
    new Newspaper('Magyar Nemzet'),
  ];

  constructor(private readonly bookService: BookService ) { }

  ngOnInit() {
   this.subs = this.bookService.getBooks().subscribe(
      data => {this.tempBooks = data}
    )
    this.tempBooks.map(x => {this.books.push(x)})
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
