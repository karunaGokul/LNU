import { CalendarRequestModel, CalendarResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface ICoachCalendarService {
  coachcalendar(
    request: CalendarRequestModel
  ): Promise<Array<CalendarResponseModel>>;
}

export class CoachCalendarService
  extends BaseService<CalendarRequestModel, CalendarResponseModel>
  implements ICoachCalendarService
{
  constructor() {
    super("");
  }
  public coachcalendar(
    request: CalendarRequestModel
  ): Promise<Array<CalendarResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<CalendarResponseModel>();
      items.push({
        AppointmentType: "none",
        Date: 5,
        Duration: "none",
        Queries: "none",
      });
      resolve(items);
    });
  }
}
