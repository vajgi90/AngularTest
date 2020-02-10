import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  getBooks(): Observable<Book[]> {
    return of([
      new Book('Stars from Eger', 'The revenge of Jumurdzsák OBS'),
      new Book('Boys from Pál street', 'RIP Nemecsek OBS'),
      new Book('Sons of a man with stone heart', 'OBS')
    ]);
  }
}
