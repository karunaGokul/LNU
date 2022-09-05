import { ClientRequestModel, ClientResponseModel, CoachDetailsModel, CoachResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface IProfileService {
  getProfile(request: ClientRequestModel): Promise<ClientResponseModel>;
  getProfileCoach(request: ClientRequestModel): Promise<CoachResponseModel>;
  updateProfile(file: File, request: ClientResponseModel): Promise<any>;
  updateProfileCoach(file: File, request: CoachResponseModel): Promise<any>;
  getCoachesByTypeForSelection(councelingTypeId: number): Promise<Array<CoachDetailsModel>>;
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

  getProfileCoach(request: ClientRequestModel): Promise<CoachResponseModel> {
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

  updateProfileCoach(file: File, request: CoachResponseModel): Promise<any> {
    let postData = JSON.stringify(request.CounselingType);
    let formData = new FormData();
    formData.append("image", file);
    formData.append("Name", request.Name);
    formData.append("Experience", request.Experience);
    formData.append("CounselingType", postData);
    formData.append("Id", request.Id);

    return this.upload(formData, `profile/EditProfile`);
  }

  getCoachesByTypeForSelection(councelingTypeId: number): Promise<Array<CoachDetailsModel>> {
    return this.httpGet("profile/GetCoachesByTypeForSelection", {
      councelingTypeId: councelingTypeId,
    }).then((response) => {
      return response.data;
    });
  }
}
