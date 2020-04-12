import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFeedbackComponent } from './multi-feedback.component';

describe('MultiFeedbackComponent', () => {
  let component: MultiFeedbackComponent;
  let fixture: ComponentFixture<MultiFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
