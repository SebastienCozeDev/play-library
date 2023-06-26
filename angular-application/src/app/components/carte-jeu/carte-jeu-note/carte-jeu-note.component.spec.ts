import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteJeuNoteComponent } from './carte-jeu-note.component';

describe('CarteJeuNoteComponent', () => {
  let component: CarteJeuNoteComponent;
  let fixture: ComponentFixture<CarteJeuNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteJeuNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteJeuNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
