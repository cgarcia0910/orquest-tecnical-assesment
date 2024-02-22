import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelEmployeesAsistanceDisplayerService } from './domain/model-employees-asistance-displayer.service';
import { EmployeesAsistanceService } from './adapter/employees-asistance-json-adapter.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesAsistanceComponent } from './pages/employees-asistance/employees-asistance.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeesAsistanceComponent
  ],
  providers: [
    // Inject domain classes into component
    { provide: 'IModelEmployeesAsistance', useClass: ModelEmployeesAsistanceDisplayerService },
    // Inject adapters into domain classes
    { provide: 'IAdapterEmployeesAsistanceJSON', useClass: EmployeesAsistanceService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
