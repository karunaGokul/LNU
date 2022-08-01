import {
  CoachRequestModel,
  CoachResponseModel,
  CounselingModel,
} from "@/model";
import { BaseService } from "./base.service";

export interface ICoachProfileService {
  coachProfile(request: CoachRequestModel): Promise<Array<CoachResponseModel>>;
  getCounselingType(): Promise<Array<CounselingModel>>;
}

export class CoachProfileService
  extends BaseService<CoachRequestModel, CoachResponseModel>
  implements ICoachProfileService
{
  constructor() {
    super("");
  }
  public coachProfile(
    request: CoachRequestModel
  ): Promise<Array<CoachResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<CoachResponseModel>();
      items.push({
        fullName: "Lifenyou",
        qualifications: "doctor",
        experience: "five years",
        counsellingType: "regular doctor",
        upcomingAppointments: "none",
        payouts: "100000",
      });
      resolve(items);
    });
  }
  public getCounselingType(): Promise<Array<CounselingModel>> {
    return this.httpGet("common/CounselingTypes", null).then((response) => {
      return response.data;
    });
  }
}
