import { classToClassFromExist } from "class-transformer";
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
  CounselingType: string;
  CounselingTypeName: string;
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

export class AssignCoachModel extends ConfirmAppointmentModel {
  coachId: string;
}

export class UpdateSummaryRequestModel {
  clientId: string;
  Summary: string;
}

export class AdminCounselingTypeModel {
  Id: string;
  Image: string;
  Title: string;
  Discription: string;
}

export class AdminEditCounsellingModel {
  Id: string;
  Image: string;
  Title: string;
  Summary: string;
  Discription: string;
  Duration: number;
  Cost: number;
}

export class AdminDeleteCouselling {
  id: string;
}
