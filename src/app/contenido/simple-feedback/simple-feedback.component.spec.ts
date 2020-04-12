import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFeedbackComponent } from './simple-feedback.component';

describe('SimpleFeedbackComponent', () => {
  let component: SimpleFeedbackComponent;
  let fixture: ComponentFixture<SimpleFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
