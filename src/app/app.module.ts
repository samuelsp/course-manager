import { CourseInfoComponent } from './courses/course-info.component';
import { Error404Component } from './Error404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'courses', component: CourseListComponent
        },
        {
          path: 'courses/info/:id', component: CourseInfoComponent
        },
        {
          path: '', redirectTo: 'courses', pathMatch: 'full' 
        },
        {
          path: '**', component: Error404Component
        },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
