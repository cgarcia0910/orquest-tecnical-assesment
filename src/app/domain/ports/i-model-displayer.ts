import { Observable } from "rxjs";
import { EmployeesAsistance } from "../models/employeeAsistance";

export interface IModelEmployeesAsistance {
    getAsistanceByWeek(dateFrom: Date, dateTo: Date): Observable<EmployeesAsistance[]>;
}