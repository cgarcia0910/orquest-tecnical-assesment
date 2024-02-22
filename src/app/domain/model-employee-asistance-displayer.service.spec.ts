import { TestBed } from '@angular/core/testing';
import { ModelEmployeesAsistanceDisplayerService } from './model-employees-asistance-displayer.service';
import { IAdapterEmployeesAsistanceJSON } from "./ports/i-adapter-employees-asistance-json";
// import { EmployeesAsistanceService } from '../adapter/employees-asistance-json-adapter.service';
import { Observable, of } from 'rxjs';
import { JSONEmployeesAsistance } from './models/employeeAsistance';
import { EmployeesAsistanceService } from '../adapter/employees-asistance-json-adapter.service';

export const EMPLOYEES_ASISTANCE_JSON = {
    "employees": [
      {
        "id": 1,
        "name": "Antonio",
        "lastName": "Genaro"
      },
      {
        "id": 2,
        "name": "Adrián",
        "lastName": "Aguado"
      },
      {
        "id": 3,
        "name": "Ash",
        "lastName": "Ketchum"
      }
    ],
    "dates": [
      {
        "date": "2024-02-05",
        "schedule": [
          {
            "employeeId": 1,
            "startTime": "2024-02-05T08:00:00Z",
            "endTime": "2024-02-05T12:00:00Z"
          },
          {
            "employeeId": 2,
            "startTime": "2024-02-05T10:00:00Z",
            "endTime": "2024-02-05T18:00:00Z"
          },
          {
            "employeeId": 3,
            "startTime": "2024-02-05T14:00:00Z",
            "endTime": "2024-02-05T20:00:00Z"
          }
        ]
      },
      {
        "date": "2024-02-06",
        "schedule": [
          {
            "employeeId": 1,
            "startTime": "2024-02-06T10:00:00Z",
            "endTime": "2024-02-06T18:00:00Z"
          },
          {
            "employeeId": 2,
            "startTime": "2024-02-06T14:00:00Z"
          }
        ]
      },
      {
        "date": "2024-02-07",
        "schedule": [
          {
            "employeeId": 1,
            "startTime": "2024-02-07T08:00:00Z"
          },
          {
            "employeeId": 2,
            "startTime": "2024-02-07T14:00:00Z",
            "endTime": "2024-02-07T20:00:00Z"
          },
          {
            "employeeId": 3,
            "endTime": "2024-02-07T18:00:00Z"
          }
        ]
      },
      {
        "date": "2024-02-08",
        "schedule": [
          {
            "employeeId": 1,
            "startTime": "2024-02-08T08:00:00Z",
            "endTime": "2024-02-08T12:00:00Z"
          },
          {
            "employeeId": 3,
            "startTime": "2024-02-08T14:00:00Z",
            "endTime": "2024-02-08T20:00:00Z"
          }
        ]
      },
      {
        "date": "2024-02-09",
        "schedule": [
          {
            "employeeId": 2,
            "startTime": "2024-02-09T14:00:00Z",
            "endTime": "2024-02-09T20:00:00Z"
          },
          {
            "employeeId": 3,
            "startTime": "2024-02-09T10:00:00Z",
            "endTime": "2024-02-09T18:00:00Z"
          }
        ]
      },
      {
        "date": "2024-02-10",
        "schedule": [
          {
            "employeeId": 1,
            "startTime": "2024-02-10T08:00:00Z",
            "endTime": "2024-02-10T12:00:00Z"
          },
          {
            "employeeId": 2,
            "startTime": "2024-02-10T14:00:00Z",
            "endTime": "2024-02-10T20:00:00Z"
          }
        ]
      },
      {
        "date": "2024-02-11",
        "schedule": [
          {
            "employeeId": 3,
            "startTime": "2024-02-11T14:00:00Z"
          }
        ]
      }
    ]
  };

  export const EXPECTED_TRANSFORMATED_OBJECT = [
    {name: 'Antonio', lastName: 'Genaro', day0StartTime: '2024-02-05T08:00:00Z', day0EndTime: '2024-02-05T12:00:00Z', day0Incomplete: false, day1StartTime: '2024-02-06T10:00:00Z', day1EndTime: '2024-02-06T18:00:00Z', day1Incomplete: false, day2StartTime: '2024-02-07T08:00:00Z', day2EndTime: undefined, day2Incomplete: true, day3StartTime: '2024-02-08T08:00:00Z', day3EndTime: '2024-02-08T12:00:00Z', day3Incomplete: false, day5StartTime: '2024-02-10T08:00:00Z', day5EndTime: '2024-02-10T12:00:00Z', day5Incomplete: false},
    {name: 'Adrián', lastName: 'Aguado', day0StartTime: '2024-02-05T10:00:00Z', day0EndTime: '2024-02-05T18:00:00Z', day0Incomplete: false, day1StartTime: '2024-02-06T14:00:00Z', day1EndTime: undefined, day1Incomplete: true, day2StartTime: '2024-02-07T14:00:00Z', day2EndTime: '2024-02-07T20:00:00Z', day2Incomplete: false, day4StartTime: '2024-02-09T14:00:00Z', day4EndTime: '2024-02-09T20:00:00Z', day4Incomplete: false, day5StartTime: '2024-02-10T14:00:00Z', day5EndTime: '2024-02-10T20:00:00Z', day5Incomplete: false},
    {name: 'Ash', lastName: 'Ketchum', day0StartTime: '2024-02-05T14:00:00Z', day0EndTime: '2024-02-05T20:00:00Z', day0Incomplete: false, day2StartTime: undefined, day2EndTime: '2024-02-07T18:00:00Z', day2Incomplete: true, day3StartTime: '2024-02-08T14:00:00Z', day3EndTime: '2024-02-08T20:00:00Z', day3Incomplete: false, day4StartTime: '2024-02-09T10:00:00Z', day4EndTime: '2024-02-09T18:00:00Z', day4Incomplete: false, day6StartTime: '2024-02-11T14:00:00Z', day6EndTime: undefined, day6Incomplete: true}
    ];
describe('Model employee asistance displayer service', () => {
  let service: ModelEmployeesAsistanceDisplayerService;
  let iAdapterEmployeesAsistanceJSON: jasmine.SpyObj<IAdapterEmployeesAsistanceJSON>;
  beforeEach(() => {
    iAdapterEmployeesAsistanceJSON = jasmine.createSpyObj('IAdapterEmployeesAsistanceJSON', ['getEmployeesAsistanceJSONList']);
    service = new ModelEmployeesAsistanceDisplayerService(iAdapterEmployeesAsistanceJSON);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert to destination model', (done: DoneFn) => {
    iAdapterEmployeesAsistanceJSON.getEmployeesAsistanceJSONList.and.returnValue(of(EMPLOYEES_ASISTANCE_JSON as JSONEmployeesAsistance));
    service.getAsistanceByWeek(new Date(), new Date()).subscribe(response => {
        expect(response).toEqual(EXPECTED_TRANSFORMATED_OBJECT as any);
        done();
    })
  })
});