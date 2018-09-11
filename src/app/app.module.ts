import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component'
import {AccountModule} from './account/account.module';
import {QuestionsModule} from './questions/questions.module';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionIndexComponent } from './question-index/question-index.component';
import { QuestionNewComponentComponent } from './question-new-component/question-new-component.component';
import { QuestionViewComponentComponent } from './question-view-component/question-view-component.component';

var myroutes:Routes=[
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"questions",component:QuestionIndexComponent},
{path:"newquestion",component:QuestionNewComponentComponent},
{path:"viewquestion",component:QuestionViewComponentComponent},

];
var myroutes2=RouterModule.forRoot(myroutes);
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccountModule,
    QuestionsModule,
    myroutes2
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
