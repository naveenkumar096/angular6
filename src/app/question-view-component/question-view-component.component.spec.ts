import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionViewComponentComponent } from './question-view-component.component';

describe('QuestionViewComponentComponent', () => {
  let component: QuestionViewComponentComponent;
  let fixture: ComponentFixture<QuestionViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
