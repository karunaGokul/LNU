import { CoachRequestModel, CoachResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface ICoachProfileService {
  coachProfile(request: CoachRequestModel): Promise<Array<CoachResponseModel>>;
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
}
