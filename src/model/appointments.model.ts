import { CounselingModel } from "./registration.model";

export class BookAppointmentRequestModel {
    appointmentDate: string;
    appointmentTime: string;
    CounselingType: CounselingModel;
}


