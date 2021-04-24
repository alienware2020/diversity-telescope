import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JdScoringComponent } from './jd-scoring/jd-scoring.component';
import { ResumeScreeningComponent } from './resume-screening/resume-screening.component';
import { HiringMixComponent } from './hiring-mix/hiring-mix.component';
import { RouterModule } from '@angular/router';
import bootstrap from "bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SalaryOptimizationComponent } from './salary-optimization/salary-optimization.component';
import { AttritionPredictionComponent } from './attrition-prediction/attrition-prediction.component';
import { RewardRecognitionComponent } from './reward-recognition/reward-recognition.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JdScoringComponent,
    ResumeScreeningComponent,
    HiringMixComponent,
    NavbarComponent,
    SalaryOptimizationComponent,
    AttritionPredictionComponent,
    RewardRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: JdScoringComponent },
      { path: 'jd-scoring', component: JdScoringComponent },
      { path: 'resume-screening', component: ResumeScreeningComponent },
      { path: 'hiring-mix', component: HiringMixComponent },
      { path: 'salary-optimization', component: SalaryOptimizationComponent },
      { path: 'attrition-prediction', component: AttritionPredictionComponent },
      { path: 'reward-recognition', component: RewardRecognitionComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
