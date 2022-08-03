import { CounselingModel } from "./registration.model";

export class BookAppointmentRequestModel {
    AppointmentDate: string;
    AppointmentTime: string;
    CounselingType: CounselingModel;
    ExistingCoach: boolean;
    Coach: string;
}