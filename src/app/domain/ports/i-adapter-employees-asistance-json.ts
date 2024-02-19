import { Observable } from "rxjs";
import { JSONEmployeesAsistance } from "../models/employeeAsistance";

export interface IAdapterEmployeesAsistanceJSON {
    getEmployeesAsistanceJSONList():Observable<JSONEmployeesAsistance>;
}