//modules imports 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating'

//router import
import { AppRoutingModule } from './app-routing.module';
//pages imports
import { DashboardPage } from './pages/dashboard/dashboard.component';
//components imports
import { AppComponent } from './app.component';
import { ShCourseCardComponent } from './components/sh-course-card/sh-course-card.component';
import { ShNavigationComponent } from './components/sh-navigation/sh-navigation.component';
import { ShTimeTableComponent } from './components/sh-time-table/sh-time-table.component';
import { ShProgressComponent } from './components/sh-progress/sh-progress.component';
import { ShHomeworkComponent } from './components/sh-homework/sh-homework.component';
import { ShCourseSidebarDetailComponent } from './components/sh-course-sidebar-detail/sh-course-sidebar-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShCourseCardComponent,
    DashboardPage,
    ShNavigationComponent,
    ShTimeTableComponent,
    ShProgressComponent,
    ShHomeworkComponent,
    ShCourseSidebarDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToggleButtonModule,
    FormsModule,
    AvatarModule,
    BadgeModule,
    ProgressBarModule,
    SidebarModule,
    TagModule,
    TabViewModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
