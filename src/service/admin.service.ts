import {
  CancelAppointmentModel,
  ConfirmAppointmentModel,
  GetCoachesModel,
  GetClientsModel,
  AssignCoachModel,
  UpdateSummaryRequestModel,
  AdminCounselingTypeModel,
  AdminEditCounsellingModel,
  AdminDeleteCouselling,
} from "@/model";
import { BaseService } from "./base.service";

export interface IAdminService {
  getCoaches(): Promise<Array<GetCoachesModel>>;
  getClient(): Promise<Array<GetClientsModel>>;
  confirmAppointment(request: ConfirmAppointmentModel): Promise<any>;
  cancelAppointment(request: CancelAppointmentModel): Promise<any>;
  assignCoach(request: AssignCoachModel): Promise<any>;
  updateSummary(clientId: string, Summary: string): Promise<any>;
  getMockCounsellingType(request: AdminCounselingTypeModel): Promise<any>;
  EditCounsellingType(request: AdminEditCounsellingModel): Promise<any>;
  DeleteCounsellingType(request: AdminDeleteCouselling): Promise<any>;
}

export class AdminService
  extends BaseService<any, any>
  implements IAdminService
{
  constructor() {
    super("admin");
  }

  public DeleteCounsellingType(request: AdminDeleteCouselling): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(request);
      resolve(request);
    });
  }
  public EditCounsellingType(request: any): Promise<any> {
    let formData = new FormData();
    formData.append("EditCounselling", request);
    return this.httpPost("Admin/EditCounsellingProgram", formData).then(
      (response) => {
        return response.data;
      }
    );
  }
  public getMockCounsellingType(
    request: AdminCounselingTypeModel
  ): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      let items = new Array<AdminCounselingTypeModel>();

      items.push(
        {
          Id: "1",
          Image:
            "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80",
          Title: "Behavioural Counselling",
          Discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi  eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae error, qui eos quibusdam, exercitationem voluptatum undeaspernatur! Sed aliquam modi ab.",
        },
        {
          Id: "2",
          Image:
            "https://images.unsplash.com/photo-1542338347-4fff3276af78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVoYXZpb3VyYWwlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          Title: "Marriage Counselling",
          Discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi  eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae error, qui eos quibusdam, exercitationem voluptatum undeaspernatur! Sed aliquam modi ab.",
        },
        {
          Id: "3",
          Image:
            "https://images.unsplash.com/photo-1593634804965-0394d1324bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGQlMjAlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          Title: "Child Counselling",
          Discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi  eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae error, qui eos quibusdam, exercitationem voluptatum undeaspernatur! Sed aliquam modi ab.",
        },
        {
          Id: "4",
          Image:
            "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          Title: "MentalHealth Counseling",
          Discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi  eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae error, qui eos quibusdam, exercitationem voluptatum undeaspernatur! Sed aliquam modi ab.",
        },
        {
          Id: "5",
          Image:
            "https://plus.unsplash.com/premium_photo-1661255424179-76d263e53ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          Title: "Career Counselling",
          Discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi  eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae error, qui eos quibusdam, exercitationem voluptatum undeaspernatur! Sed aliquam modi ab.",
        }
      );

      resolve(items);
    });
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
