import { Observable } from "rxjs";
import { EmployeesAsistance } from "../models/employeeAsistance";

export interface IAdapterEmployeesAsistanceJSON {
    getEmployeesAsistanceJSONList():Observable<EmployeesAsistance>;
}