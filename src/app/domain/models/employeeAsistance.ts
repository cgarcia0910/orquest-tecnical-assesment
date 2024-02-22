export interface JSONEmployeesAsistance {
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

export interface EmployeesAsistance {
  name: string,
  lastName: string,
  day0StartTime?: Date,
  day0EndTime?: Date,
  day0Incomplete?: Boolean,
  day1StartTime?: Date,
  day1EndTime?: Date,
  day1Incomplete?: Boolean,
  day2StartTime?: Date,
  day2EndTime?: Date,
  day2Incomplete?: Boolean,
  day3StartTime?: Date,
  day3EndTime?: Date,
  day3Incomplete?: Boolean,
  day4StartTime?: Date,
  day4EndTime?: Date,
  day4Incomplete?: Boolean,
  day5StartTime?: Date,
  day5EndTime?: Date,
  day5Incomplete?: Boolean,
  day6StartTime?: Date,
  day6EndTime?: Date,
  day6Incomplete?: Boolean,
}