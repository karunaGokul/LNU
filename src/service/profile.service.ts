import {
  ClientRequestModel,
  ClientResponseModel,
} from "@/model";
import { BaseService } from "./base.service";

export interface IProfileService {
  getProfile(request: ClientRequestModel): Promise<ClientResponseModel>;
  updateProfile(file: File, request: ClientResponseModel): Promise<any>;
}

export class ProfileService
  extends BaseService<any, ClientResponseModel>
  implements IProfileService
{
  constructor() {
    super("profile");
  }

  getProfile(request: ClientRequestModel): Promise<ClientResponseModel> {
    return this.httpGet("profile/loadprofile", request).then((response) => {
      return response.data;
    });
  }

  updateProfile(file: File, request: ClientResponseModel): Promise<any> {
    let formData = new FormData();
    formData.append("image", file);
    formData.append("Name", request.Name);
    formData.append("phoneNumber", request.PhoneNumber);
    formData.append("Email", request.Email);
    formData.append("Queries", request.Queries);
    formData.append("Id", request.Id);

    return this.upload(formData, `profile/EditProfile`);
  }
}
