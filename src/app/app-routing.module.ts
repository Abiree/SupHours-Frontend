import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShTimeTableComponent } from './components/sh-time-table/sh-time-table.component';

const routes: Routes = [{
  path:'',
  component:ShTimeTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
