import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GradeTrackerComponent } from './grade-tracker/grade-tracker.component';
import { AcademicPlannerComponent } from './academic-planner/academic-planner.component';
import { PlannerGenService } from './services/planner-gen/planner-gen.service';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackerGenService } from './services/tracker-gen/tracker-gen.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GradeTrackerComponent,
    AcademicPlannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderComponent,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PlannerGenService, provideHttpClient(withInterceptorsFromDi()), TrackerGenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
