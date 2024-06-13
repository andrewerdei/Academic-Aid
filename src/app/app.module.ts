import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GradeTrackerComponent } from './grade-tracker/grade-tracker.component';
import { AcademicPlannerComponent } from './academic-planner/academic-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GradeTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcademicPlannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
