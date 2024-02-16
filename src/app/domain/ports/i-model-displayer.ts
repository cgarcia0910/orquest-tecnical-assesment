import { Observable } from "rxjs";
import { EmployeesAsistance } from "../models/employeeAsistance";

export interface IModelEmployeesAsistance {
    getAsistanceByWeek(week:number): Observable<EmployeesAsistance>;
}