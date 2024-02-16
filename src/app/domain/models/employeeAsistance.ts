export interface EmployeesAsistance {
  employees: {
    id: number;
    name: string;
    lastName: string;
  }[];
  dates: {
    date: string;
    schedule: {
      employeeId: number;
      startTime: string;
      endTime: string;
    }[];
  }[];
}