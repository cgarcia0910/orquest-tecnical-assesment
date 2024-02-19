import { Inject, Injectable } from "@angular/core";
import { IModelEmployeesAsistance } from "./ports/i-model-displayer";
import { Observable, map, of } from "rxjs";
import { EmployeesAsistance, JSONEmployeesAsistance } from "./models/employeeAsistance";
import { IAdapterEmployeesAsistanceJSON } from "./ports/i-adapter-employees-asistance-json";

@Injectable()
export class ModelEmployeesAsistanceDisplayerService implements IModelEmployeesAsistance {
    constructor(
        @Inject('IAdapterEmployeesAsistanceJSON') private _adapterEmployeesAsistanceJSON: IAdapterEmployeesAsistanceJSON
    ) { }
    getAsistanceByWeek(week: number): Observable<EmployeesAsistance[]> {
        return this._adapterEmployeesAsistanceJSON.getEmployeesAsistanceJSONList().pipe(
            map((employeeJson: JSONEmployeesAsistance) => {
                const { employees = [], dates = [] } = employeeJson || {};
                return employees.map(employee => {
                    const employeeInfo = { name: employee.name, lastName: employee.lastName }
                    return dates.reduce((acc, curr, index) => {
                        const employeeScheduleInfo = curr.schedule.find(scheduleIfno => scheduleIfno.employeeId === employee.id);
                        return employeeScheduleInfo ? { ...acc, [`day${index}StartTime`]: employeeScheduleInfo.startTime, [`day${index}EndTime`]: employeeScheduleInfo.endTime, [`day${index}Incomplete`]: employeeScheduleInfo.startTime === undefined || employeeScheduleInfo.endTime } : acc;

                    }, employeeInfo)
                }
                );
            }))
    }
}