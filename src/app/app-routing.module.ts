import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPage } from './pages/calendar/calendar.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    title: 'dashbord',
    component: DashboardPage
  },
  {
    path: 'calendar',
    title: 'calendar',
    component: CalendarPage
  },
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
