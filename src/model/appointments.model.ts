import { DataRequest } from "./base.model";
import { PaymentRequestModel } from "./payment.model";
import { CounselingModel } from "./registration.model";

export class PreviousCoachRequestModel {
  clientId: string;
  counselingTypeId: string;
}
export class CoachDetailsModel {
  Id: string = null;
  Name: string = null;
}

export class InviteLinkModel {
  appointmentId: string;
  inviteLink: string;
}
export class CompleteAppoinmentModel {
  appointmentId: string;
  link: string;
  notes: string;
}
export class BookAppointmentRequestModel {
  AppointmentDate: string;
  AppointmentTime: string;
  CounselingType: CounselingModel;
  CoachDetails: CoachDetailsModel;
  AppointmentId?: string;
  Queries?: string;
  TellAboutYourSelf: string;
}

export class UpdatePaymentRequestModel {
  AppointmentId: string;
  //Amount: number;
  Status: string;
  //PaymentType: string;
}

export class BookAppointmentValidationRequestModel extends BookAppointmentRequestModel {
  ExistingCoach: boolean = false;
}
export class AppoinmentRequestModel extends DataRequest {
  dateRange: string;
  // status: string;
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
  Name: string;
  Id: 5;
  ProductId: string;

  // createdDate: string;
  // updatedDate: string;
}
export class AppointmentResponseModel {
  clientName: string;
  clientId: string;
  appointmentDate: string;
  appointmentTime: string;
  counselingType: AppointmentCounselingProgramModel;
  coachName: string;
  coachId: string;
  coachDetails: string;
  status: string;
  payment: string;
  id: string;
  tellAboutYourSelf: string;
  clientSummary: string;
  canConfirm: boolean;
  canReschedule: boolean;
  recordingLink: string;
  invitationLink: string;
  coachNotes: string;
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
  status: string;
  tellAboutYourSelf: string;
  clientSummary: string;
  coachId: string;

  appointmentDate: any;
  appointmentTime: string;
  canConfirm: boolean;
  canReschedule: boolean;

  recordingLink: string;
  invitationLink: string;
  coachNotes: string;
}

export class AppointmentByStatusRequestModel {
  status: string;
}

// export class AppointmentByStatusResponseModel extends AppointmentResponseModel {
//  payment: PaymentModel;
// }

export class PaymentModel {
  amount: string;
  status: string;
  paymentDate: string;
  paymentType: string;
}

export class AvailablityRequestModel {
  coachId: number;
  date: string;
  times: Array<string>;
}

export class AvailablityResponseModel {
  coachId: number;
  date: string;
  times: Array<string>;
}
