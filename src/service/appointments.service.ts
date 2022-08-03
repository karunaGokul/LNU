import { BookAppointmentRequestModel } from "@/model";
import { BaseService } from "./base.service";

export interface IAppointmentService {
  bookAppointments(request: BookAppointmentRequestModel): Promise<any>;
}

export class AppointmentService
  extends BaseService<any, any>
  implements IAppointmentService
{
  constructor() {
    super("");
  }
  public bookAppointments(request: BookAppointmentRequestModel): Promise<any> {
    return this.httpPost("Appointment/BookAppointment", request).then(
      (response) => {
        return response.data;
      }
    );
  }
}
