import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAchatModalComponent } from './delete-achat-modal.component';

describe('DeleteAchatModalComponent', () => {
  let component: DeleteAchatModalComponent;
  let fixture: ComponentFixture<DeleteAchatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAchatModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAchatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
