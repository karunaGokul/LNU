import {
  CancelAppointmentModel,
  ConfirmAppointmentModel,
  GetCoachesModel,
  GetClientsModel,
  AssignCoachModel,
  UpdateSummaryRequestModel,
  AdminCounselingTypeModel,
  AdminEditCounsellingModel,
  AdminDeleteCounselling,
  AdminAddCounsellingModel,
} from "@/model";
import { BaseService } from "./base.service";

export interface IAdminService {
  getCoaches(): Promise<Array<GetCoachesModel>>;
  getClient(): Promise<Array<GetClientsModel>>;
  confirmAppointment(request: ConfirmAppointmentModel): Promise<any>;
  cancelAppointment(request: CancelAppointmentModel): Promise<any>;
  assignCoach(request: AssignCoachModel): Promise<any>;
  updateSummary(clientId: string, Summary: string): Promise<any>;
  getMockCounsellingType(request: any): Promise<any>;
  EditCounsellingType(
    request: AdminEditCounsellingModel,
    productId: string
  ): Promise<any>;
  DeleteCounsellingType(request: AdminDeleteCounselling): Promise<any>;
  AddCounsellingType(request: AdminAddCounsellingModel): Promise<any>;
}

export class AdminService
  extends BaseService<any, any>
  implements IAdminService
{
  constructor() {
    super("admin");
  }
  public AddCounsellingType(request: AdminAddCounsellingModel): Promise<any> {
    let formData = new FormData();
    formData.append("Name", request.Name);
    formData.append("Image", request.Image);
    formData.append("Summary", request.Summary);
    formData.append("Description", request.Description);
    formData.append("Duration", request.Duration);
    formData.append("Cost", request.Cost);
    console.log(request);
    console.log(formData);

    return this.upload(formData, "Admin/AddCounsellingProgram");
  }

  public DeleteCounsellingType(request: AdminDeleteCounselling): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(request);
      resolve(request);
    });
  }
  public EditCounsellingType(request: any, productId: string): Promise<any> {
    request.Id = productId;
    let formData = new FormData();
    formData.append("Id", request.Id);
    formData.append("Name", request.Name);
    formData.append("Image", request.Image);
    formData.append("Summary", request.Summary);
    formData.append("Description", request.Description);
    formData.append("Duration", request.Duration);
    formData.append("Cost", request.Cost);
    return this.upload(formData, "Admin/EditCounsellingProgram");
  }
  public getMockCounsellingType(request: any): Promise<any> {
    return this.httpGet("Admin/GetDetailedCounsellingPrograms", request).then(
      (response) => {
        console.log(response);
        return response;
      }
    );
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

  public updateSummary(clientId: string, Summary: string): Promise<any> {
    return this.httpPost(
      "Admin/UpdateClientSummary?clientId=" + clientId + "&summary=" + Summary,
      null
    ).then((response) => {
      return response.data;
    });
  }
}
