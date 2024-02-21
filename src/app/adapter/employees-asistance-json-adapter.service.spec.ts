import { HttpClient } from "@angular/common/http";
import { EmployeesAsistanceService } from "./employees-asistance-json-adapter.service";
import { of } from "rxjs";
import { JSONEmployeesAsistance } from "../domain/models/employeeAsistance";

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

describe('Employees asistance json adapter service', () => {
    let service: EmployeesAsistanceService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        service = new EmployeesAsistanceService(httpClientSpy);
      });
    
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should return the content of the JSON file without any change', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(of(EMPLOYEES_ASISTANCE_JSON));
        service.getEmployeesAsistanceJSONList().subscribe(response => {
            expect(response).toEqual(EMPLOYEES_ASISTANCE_JSON as JSONEmployeesAsistance);
            done();
        })
    })
  });