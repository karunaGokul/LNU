import {
  AppoinmentRequestModel,
  AppointmentResponseModel,
  BookAppointmentRequestModel,
  CoachDetailsModel,
  UpdatePaymentRequestModel,
  InviteLinkModel,
  CompleteAppoinmentModel,
} from "@/model";
import { compile } from "vue/types/umd";
import { IBaseService, BaseService } from "./base.service";

export interface IAppointmentService
  extends IBaseService<AppoinmentRequestModel, AppointmentResponseModel> {
  getAppointments(
    request: AppoinmentRequestModel
  ): Promise<Array<AppointmentResponseModel>>;
  bookAppointments(request: BookAppointmentRequestModel): Promise<any>;
  rescheduleAppointments(request: BookAppointmentRequestModel): Promise<any>;
  getCoachesByTypeForSelection(
    councelingTypeId: number
  ): Promise<Array<CoachDetailsModel>>;
  updatePayment(request: UpdatePaymentRequestModel): Promise<any>;
  // getPendingAppointment(request: AppointmentByStatusRequestModel): Promise<Array<AppointmentByStatusResponseModel>>;
  AppoinmentInviteLink(request: InviteLinkModel): Promise<any>;
  CompleteAppoinment(request: CompleteAppoinmentModel): Promise<any>;
}

export class AppointmentService
  extends BaseService<AppoinmentRequestModel, AppointmentResponseModel>
  implements IAppointmentService
{
  constructor() {
    super("");
  }

  public AppoinmentInviteLink(request: InviteLinkModel): Promise<any> {
    return new Promise((resolve, reject) => {
      let items = new InviteLinkModel();
      items.Id = "1";
      items.Link = "https://vuejs.org/";
      resolve(items);
      console.log(items);
      return resolve;
    });
  }

  public CompleteAppoinment(request: CompleteAppoinmentModel): Promise<any> {
    return new Promise((resolve, reject) => {
      let items = new CompleteAppoinmentModel();
      items.Id = "1";
      items.Link = "https://vuejs.org/";
      items.Notes = "none";
      resolve(items);
      console.log(items);
      return resolve;
    });
  }

  public getAppointments(
    request: AppoinmentRequestModel
  ): Promise<Array<AppointmentResponseModel>> {
    return this.httpGet("Appointment/GetAllAppointmentsByMonth", request).then(
      (response) => {
        return response.data;
      }
    );
  }

  public bookAppointments(request: BookAppointmentRequestModel): Promise<any> {
    return this.httpPost("Appointment/BookAppointment", request).then(
      (response) => {
        return response.data;
      }
    );
  }

  public updatePayment(request: UpdatePaymentRequestModel): Promise<any> {
    return this.httpPost(
      "Appointment/UpdatePayment?appointmentId=" + request.AppointmentId,
      request
    ).then((response) => {
      return response.data;
    });
  }

  public rescheduleAppointments(
    request: BookAppointmentRequestModel
  ): Promise<any> {
    return this.httpPost(
      "Appointment/RescheduleAppointment?AppointmentId=" +
        request.AppointmentId,
      request
    ).then((response) => {
      console.log(response);
      return response.data;
    });
  }

  getCoachesByTypeForSelection(
    councelingTypeId: number
  ): Promise<Array<CoachDetailsModel>> {
    return this.httpGet("profile/GetCoachesByTypeForSelection", {
      councelingTypeId: councelingTypeId,
    }).then((response) => {
      return response.data;
    });
  }
}
