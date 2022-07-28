import {  AppointmentRequestModel, AppointmentResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface IAppointmentService {
  bookAppointments(
    request: AppointmentRequestModel
  ): Promise<Array<AppointmentResponseModel>>;
}

export class AppointmentService
  extends BaseService< any, AppointmentResponseModel>
  implements IAppointmentService
{
  constructor() {
    super("");
  }
  public bookAppointments(
    request: AppointmentRequestModel
  ): Promise<Array<AppointmentResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<AppointmentResponseModel>();

      items.push({
        Date: "06.07.2022",
        Time: "8:45",
        CounsellingProgramme: "Foo",
      });

      resolve(items);
    });
  }
}
