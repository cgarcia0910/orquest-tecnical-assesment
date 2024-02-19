import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { JSONEmployeesAsistance } from "../domain/models/employeeAsistance";
import { IAdapterEmployeesAsistanceJSON } from "../domain/ports/i-adapter-employees-asistance-json";

@Injectable()
export class EmployeesAsistanceService implements IAdapterEmployeesAsistanceJSON {
  private httpClient: HttpClient;
  constructor(injector: Injector) {
    this.httpClient = injector.get(HttpClient);
  }
  getEmployeesAsistanceJSONList(): Observable<JSONEmployeesAsistance> {
    return this.httpClient.get<JSONEmployeesAsistance>('./assets/prueba-orquest-datos.json')
  }
}