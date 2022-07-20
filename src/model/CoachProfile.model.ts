import { DataRequest } from "./base.model";

export class CoachRequestModel extends DataRequest {
  fullName: string;
  qualifications: string;
  experience: string;
  counsellingType: string;
  upcomingAppointments: string;
  payouts: string;
}

export class CoachResponseModel {
  fullName: string;
  qualifications: string;
  experience: string;
  counsellingType: string;
  upcomingAppointments: string;
  payouts: string;
}
