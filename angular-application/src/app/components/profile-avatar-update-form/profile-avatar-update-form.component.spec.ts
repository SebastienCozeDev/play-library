import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvatarUpdateFormComponent } from './profile-avatar-update-form.component';

describe('ProfileAvatarUpdateFormComponent', () => {
  let component: ProfileAvatarUpdateFormComponent;
  let fixture: ComponentFixture<ProfileAvatarUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAvatarUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAvatarUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
