import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropFeedbackComponent } from './drag-drop-feedback.component';

describe('DragDropFeedbackComponent', () => {
  let component: DragDropFeedbackComponent;
  let fixture: ComponentFixture<DragDropFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
