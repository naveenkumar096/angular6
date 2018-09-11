import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNewComponentComponent } from './question-new-component.component';

describe('QuestionNewComponentComponent', () => {
  let component: QuestionNewComponentComponent;
  let fixture: ComponentFixture<QuestionNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
