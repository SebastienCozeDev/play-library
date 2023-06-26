import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxListeComponent } from './jeux-liste.component';

describe('JeuxListeComponent', () => {
  let component: JeuxListeComponent;
  let fixture: ComponentFixture<JeuxListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuxListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
