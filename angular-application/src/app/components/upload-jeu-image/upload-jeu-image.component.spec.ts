import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJeuImageComponent } from './upload-jeu-image.component';

describe('UploadJeuImageComponent', () => {
  let component: UploadJeuImageComponent;
  let fixture: ComponentFixture<UploadJeuImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadJeuImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadJeuImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
