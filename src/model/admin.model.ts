import { CertificationModel } from "./registration.model";

export class GetCoachesModel {
  Id: string;
  Name: string;
  CounselingType: string;
  Email: string;
  PhoneNumber: number;
  Certificate: CertificationModel;
  Experience: number;
  ProfileImage: string;
  About: string;
}

export class confirmAppointmentModel {
  appointmentId: string;
}

export class cancelAppointmentModel extends confirmAppointmentModel {
  reason: string;
}
