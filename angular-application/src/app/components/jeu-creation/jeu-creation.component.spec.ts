import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuCreationComponent } from './jeu-creation.component';

describe('JeuCreationComponent', () => {
  let component: JeuCreationComponent;
  let fixture: ComponentFixture<JeuCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
