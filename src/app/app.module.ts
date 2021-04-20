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

@NgModule({
  declarations: [
    AppComponent,
    JdScoringComponent,
    ResumeScreeningComponent,
    HiringMixComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: JdScoringComponent},
      {path: 'jd-scoring', component: JdScoringComponent},
      {path: 'resume-screening', component: ResumeScreeningComponent},
      {path: 'hiring-mix', component: HiringMixComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
