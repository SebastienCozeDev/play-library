import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAchatModalComponent } from './create-achat-modal.component';

describe('CreateAchatModalComponent', () => {
  let component: CreateAchatModalComponent;
  let fixture: ComponentFixture<CreateAchatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAchatModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAchatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
