import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayGridComponent } from './display-grid/display-grid.component';
import { ParameterFormComponent } from './parameter-form/parameter-form.component';

const routes: Routes = [
  { path: '', component: ParameterFormComponent },
  { path: 'results', component: DisplayGridComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
