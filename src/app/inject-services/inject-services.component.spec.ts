import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectServicesComponent } from './inject-services.component';

describe('InjectServicesComponent', () => {
  let component: InjectServicesComponent;
  let fixture: ComponentFixture<InjectServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
