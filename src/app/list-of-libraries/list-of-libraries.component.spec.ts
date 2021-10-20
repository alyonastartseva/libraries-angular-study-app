import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLibrariesComponent } from './list-of-libraries.component';

describe('ListOfLibrariesComponent', () => {
  let component: ListOfLibrariesComponent;
  let fixture: ComponentFixture<ListOfLibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfLibrariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
