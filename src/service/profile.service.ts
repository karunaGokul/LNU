import { ClientRequestModel, ClientResponseModel } from "@/model";
import { BaseService } from "./base.service";
import { AxiosRequestConfig } from 'axios';

export interface IProfileService {
  // clientProfile(
  //   request: ClientRequestModel
  // ): Promise<Array<ClientResponseModel>>;

  clientProfile(file: File, request: ClientRequestModel): Promise<any>;
}

export class ProfileService
  extends BaseService<ClientRequestModel, ClientResponseModel>
  implements IProfileService
{
  constructor() {
    super("");
  }
  // public clientProfile(
  //   request: ClientRequestModel
  // ): Promise<Array<ClientResponseModel>> {
  //   return new Promise((resolve, reject) => {
  //     let items = new Array<ClientResponseModel>();

  //     items.push({
  //       Name: "LifeNyou",
  //       Contact: "1234567890",
  //       Email: "lifenyou@test.com",
  //       Queries: "welcome",
  //     });

  //     resolve(items);
  //   });
  // }

  clientProfile(file: File, request: ClientRequestModel): Promise<any> {
    let formData = new FormData();
    formData.append("Logo", file);
    formData.append("Name", request.Name);
    formData.append("Contact", request.Contact);
    formData.append("Email", request.Email);
    formData.append("Queries", request.Queries);
    
    return this.upload(formData, `Profile`);
  }
}
