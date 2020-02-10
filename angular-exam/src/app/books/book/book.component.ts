import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() model: Book;

  constructor(private readonly loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.log(this.model.title);
  }
}
