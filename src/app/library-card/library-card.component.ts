import { Component, OnInit, Input } from '@angular/core';

import { Library } from "../Classes/Library";

@Component({
  selector: 'app-library',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  @Input() library: Library;

  ngOnInit(): void {
  }

}
