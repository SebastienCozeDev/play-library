import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuModificationComponent } from './jeu-modification.component';

describe('JeuModificationComponent', () => {
  let component: JeuModificationComponent;
  let fixture: ComponentFixture<JeuModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuModificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
