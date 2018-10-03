import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInjectComponent } from './user-inject.component';

describe('UserInjectComponent', () => {
  let component: UserInjectComponent;
  let fixture: ComponentFixture<UserInjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
