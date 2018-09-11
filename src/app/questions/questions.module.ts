import { NgModule } from '@angular/core';
import {QuestionIndexComponent} from '../question-index/question-index.component';
import {QuestionNewComponentComponent} from '../question-new-component/question-new-component.component';
import {QuestionViewComponentComponent} from '../question-view-component/question-view-component.component';

@NgModule({

  exports:[QuestionIndexComponent,QuestionNewComponentComponent,QuestionViewComponentComponent],
  declarations: [QuestionIndexComponent,QuestionNewComponentComponent,QuestionViewComponentComponent]
})
export class QuestionsModule { }
