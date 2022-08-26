import { DataRequest } from "./base.model";
import { CounselingModel } from "./registration.model";

export class CoachDetailsModel {
  Id: string = null;
  Name: string = null;
}
export class BookAppointmentRequestModel {
  AppointmentDate: string;
  AppointmentTime: string;
  CounselingType: CounselingModel;
  CoachDetails: CoachDetailsModel;
  AppointmentId?: string;
}
export class BookAppointmentValidationRequestModel  extends BookAppointmentRequestModel {
  ExistingCoach: boolean = false;
}
export class AppoinmentRequestModel extends DataRequest {
  dateRange: string;
  status: string;
}
export class AppointmentStatusModel {
  name: string;
  userId: string;
  userName: string;
  userRole: string;
  reason: string;
  creationDate: string;
}
export class AppointmentCounselingProgramModel {
  name: string;
  id: 5;
  createdDate: string;
  updatedDate: string;
}
export class AppointmentResponseModel {
  clientName: string;
  clientId: string;
  appointmentDate: string;
  appointmentStartTime: string;
  appointmentEndTime: string;
  counselingType: AppointmentCounselingProgramModel;
  status: Array<AppointmentStatusModel>;
  coachName: string;
  coachId: string;
  id: string;
  createdDate: string;
  updatedDate: string;
}
export class EventsModel {
  name: string;
  start: Date;
  end: Date;
  color: string;
  timed: boolean;
  id: string;
  clientName: string;
  coachName: string;
  clientId: string;
  counselingTypeId: number;
}
