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
    return this.httpPost(
      "Appointment/InviteLink?appointmentId=" +
        request.appointmentId +
        "&inviteLink=" +
        request.inviteLink,
      null
    ).then((response) => {
      return response.data;
    });
  }

  public CompleteAppoinment(request: CompleteAppoinmentModel): Promise<any> {
    return this.httpPost(
      "Appointment/CompleteAppointment?appointmentId=" +
        request.appointmentId +
        "&notes=" +
        request.notes +
        "&link=" +
        request.link,
      null
    ).then((res) => {
      return res.data;
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
