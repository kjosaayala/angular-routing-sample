import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateUserComponent } from './create-or-update-user.component';

describe('CreateOrUpdateUserComponent', () => {
  let component: CreateOrUpdateUserComponent;
  let fixture: ComponentFixture<CreateOrUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
