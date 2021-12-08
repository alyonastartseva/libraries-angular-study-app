import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LibraryService } from '../../services/library.service';
import { IBook } from 'src/app/core/interfaces/Book';

@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.scss']
})
export class ListOfBooksComponent implements OnInit  {

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService) {}

  libraryId: string;
  books: IBook[] = [];
  newBook: IBook = {
    _id: '',
    title: '',
    author: '',
    numberCopies: 0
  }

  loading = true;

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(switchMap(params => params.getAll('id')))
      .subscribe(data => this.libraryId = data);
    console.log(this.libraryId);
    this.getBooks(this.libraryId);
  }

  getBooks(libraryId: string): void {
    this.libraryService.getBooks(libraryId)
      .subscribe(books => {
        this.books = books;
        this.loading = false;
      })
  }

  addBook() {
    console.log({ ...this.newBook });
  }

}
