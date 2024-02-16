import { Inject, Injectable } from "@angular/core";
import { IModelEmployeesAsistance } from "./ports/i-model-displayer";
import { Observable } from "rxjs";
import { EmployeesAsistance } from "./models/employeeAsistance";
import { IAdapterEmployeesAsistanceJSON } from "./ports/i-adapter-employees-asistance-json";

@Injectable()
export class ModelEmployeesAsistanceDisplayerService implements IModelEmployeesAsistance {
    constructor(
        @Inject('IAdapterEmployeesAsistanceJSON') private _adapterEmployeesAsistanceJSON: IAdapterEmployeesAsistanceJSON
    ) {}
    getAsistanceByWeek(week: number): Observable<EmployeesAsistance> {
        return this._adapterEmployeesAsistanceJSON.getEmployeesAsistanceJSONList();
    }
}