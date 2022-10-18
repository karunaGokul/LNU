import {
  CancelAppointmentModel,
  ConfirmAppointmentModel,
  GetCoachesModel,
  GetClientsModel,
  AssignCoachModel,
  UpdateSummaryRequestModel,
} from "@/model";
import { BaseService } from "./base.service";

export interface IAdminService {
  getCoaches(): Promise<Array<GetCoachesModel>>;
  getClient(): Promise<Array<GetClientsModel>>;
  confirmAppointment(request: ConfirmAppointmentModel): Promise<any>;
  cancelAppointment(request: CancelAppointmentModel): Promise<any>;
  assignCoach(request: AssignCoachModel): Promise<any>;
  updateSummary(request: UpdateSummaryRequestModel): Promise<any>;
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
  public getClient(): Promise<Array<GetClientsModel>> {
    return this.httpGet("Admin/GetClients", null).then((response) => {
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

  public assignCoach(request: AssignCoachModel): Promise<any> {
    return this.httpPost(
      "Admin/AssignCoach?appointmentId=" +
        request.appointmentId +
        "&coachId=" +
        request.coachId,
      null
    ).then((response) => {
      return response.data;
    });
  }

  // public updateSummary(clientId: string, request: UpdateSummaryRequestModel): Promise<any> {
  //   return this.httpPost("Admin/UpdateClientSummary", {
  //     clientId: clientId,
  //   }).then((response) => {
  //     return response.data;
  //   });
  // }

  public updateSummary(request: UpdateSummaryRequestModel): Promise<any> {
      return this.httpPost("Admin/UpdateClientSummary?clientId=" + request.clientId, request).then(
        (response) => {
          return response.data;
        }
      );
    }
}
