import {
  CancelAppointmentModel,
  ConfirmAppointmentModel,
  GetCoachesModel,
  GetPreviousCoachesRequestModel,
  GetPreviousCoachesModel,
} from "@/model";
import { BaseService } from "./base.service";

export interface IAdminService {
  getCoaches(): Promise<Array<GetCoachesModel>>;
  confirmAppointment(request: ConfirmAppointmentModel): Promise<any>;
  cancelAppointment(request: CancelAppointmentModel): Promise<any>;
  getPreviousCoaches(
    request: GetPreviousCoachesRequestModel
  ): Promise<Array<GetPreviousCoachesModel>>;
}

export class AdminService
  extends BaseService<any, any>
  implements IAdminService
{
  constructor() {
    super("admin");
  }
  public getCoaches(): Promise<Array<GetCoachesModel>> {
    return this.httpGet("Admin/GetCoaches", null).then((response) => {
      return response.data;
    });
  }

  public confirmAppointment(request: ConfirmAppointmentModel): Promise<any> {
    return this.httpPost(
      "Admin/ConfirmAppointment?appointmentId=" + request.appointmentId,
      null
    ).then((response) => {
      return response.data;
    });
  }

  public cancelAppointment(request: CancelAppointmentModel): Promise<any> {
    return this.httpPost(
      "Admin/CancelAppointment?appointmentId=" +
        request.appointmentId +
        "&reason=" +
        request.reason,
      null
    ).then((response) => {
      return response.data;
    });
  }

  public getPreviousCoaches(
    request: GetPreviousCoachesRequestModel
  ): Promise<Array<GetPreviousCoachesModel>> {
    return this.httpGet(
      "Admin/GetPrevoiusCoaches?clientId=" +
        request.clientId +
        "&counselingTypeId=" +
        request.counselingTypeId,
      null
    ).then((response) => {
      return response.data;
    });
  }
}
