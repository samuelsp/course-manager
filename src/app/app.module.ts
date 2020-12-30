import { Error404Component } from './Error404/error-404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot(
      [
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
