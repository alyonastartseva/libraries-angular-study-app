import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  @Input() library: { id: number,
                      name: string,
                      description?: string,
                      locale: string,
                      address: string,
                      organizationName?: string,
                      imageUrl?: string }

  ngOnInit(): void {
  }

}
