import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireEditComponent } from './commentaire-edit.component';

describe('CommentaireEditComponent', () => {
  let component: CommentaireEditComponent;
  let fixture: ComponentFixture<CommentaireEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
