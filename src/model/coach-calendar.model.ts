import { DataRequest } from "./base.model";

export class CalendarRequestModel extends DataRequest {
  AppointmentType: string;
  Date: number;
  Duration: string;
  Queries: string;
}

export class CalendarResponseModel {
  AppointmentType: string;
  Date: number;
  Duration: string;
  Queries: string;
}
