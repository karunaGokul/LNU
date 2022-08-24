import {
  AppoinmentRequestModel,
  AppointmentResponseModel,
  BookAppointmentRequestModel,
  cancelAppointmentModel,
} from "@/model";
import { IBaseService, BaseService } from "./base.service";

export interface IAppointmentService
  extends IBaseService<AppoinmentRequestModel, AppointmentResponseModel> {
  getAppointments(
    request: AppoinmentRequestModel
  ): Promise<Array<AppointmentResponseModel>>;
  bookAppointments(request: BookAppointmentRequestModel): Promise<any>;
  rescheduleAppointments(request: BookAppointmentRequestModel): Promise<any>;
  cancelAppointments(request: cancelAppointmentModel): Promise<any>;
}

export class AppointmentService
  extends BaseService<AppoinmentRequestModel, AppointmentResponseModel>
  implements IAppointmentService
{
  constructor() {
    super("");
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
  public cancelAppointments(request: cancelAppointmentModel): Promise<any> {
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
}
