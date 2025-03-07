import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GradeTrackerComponent } from './grade-tracker/grade-tracker.component';
import { AcademicPlannerComponent } from './academic-planner/academic-planner.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'grade-tracker', component: GradeTrackerComponent },
  {path: 'academic-planner', component: AcademicPlannerComponent},
  {path: 'report', component: ErrorReportComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
