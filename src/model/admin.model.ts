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
export class GetClientsModel {
  Id: string;
  Username: string;
  Email: string;
  PhoneNumber: number;
  ProfileImage: string;
  About: string;
}

export class ConfirmAppointmentModel {
  appointmentId: string;
}

export class CancelAppointmentModel extends ConfirmAppointmentModel {
  reason: string;
}

export class GetPreviousCoachesRequestModel {
  clientId: string;
  counselingTypeId: number;
}

export class GetPreviousCoachesModel {
  id: string;
  name: string;
}
