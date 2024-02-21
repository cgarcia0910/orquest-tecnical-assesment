import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JSONEmployeesAsistance } from "../domain/models/employeeAsistance";
import { IAdapterEmployeesAsistanceJSON } from "../domain/ports/i-adapter-employees-asistance-json";

@Injectable()
export class EmployeesAsistanceService implements IAdapterEmployeesAsistanceJSON {
  constructor(private httpClient: HttpClient) {
  }
  getEmployeesAsistanceJSONList(): Observable<JSONEmployeesAsistance> {
    return this.httpClient.get<JSONEmployeesAsistance>('./assets/prueba-orquest-datos.json')
  }
}