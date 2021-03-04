import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParameterFormComponent } from './parameter-form/parameter-form.component';
import { DisplayGridComponent } from './display-grid/display-grid.component';
import { NpiDetailsService } from './service/npi-details.service'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ParameterFormComponent,
    DisplayGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{ path: './app.component', component: AppComponent }],
      { onSameUrlNavigation: 'reload' }
    ),
    MatTableModule,
    MatSortModule,
  ],
  providers: [NpiDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
