import {
  ClientRequestModel,
  ClientResponseModel,
  CoachDetailsModel,
  PreviousCoachRequestModel,
  CoachResponseModel,
  CertificateModel,
} from "@/model";
import { AxiosRequestConfig } from "axios";
import { BaseService } from "./base.service";

export interface IProfileService {
  getProfile(request: ClientRequestModel): Promise<ClientResponseModel>;
  getProfileCoach(request: ClientRequestModel): Promise<CoachResponseModel>;
  updateProfile(file: File, request: ClientResponseModel): Promise<any>;
  updateProfileCoach(file: File, request: CoachResponseModel): Promise<any>;
  getPreviousCoaches(
    request: PreviousCoachRequestModel
  ): Promise<Array<CoachDetailsModel>>;
  editCertificates(file: File, request: CertificateModel): Promise<any>;
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
    let formData = new FormData();
    formData.append("image", file);
    formData.append("Name", request.Name);
    formData.append("Experience", request.Experience);
    formData.append("CounselingTypeId", request.CounselingType.Id);
    formData.append("Id", request.Id);

    return this.upload(formData, `profile/EditProfile`);
  }

  editCertificates(file: File, request: CertificateModel): Promise<any> {
    let formData = new FormData();
    formData.append("Certificates", file);
    formData.append("Id", request.Id);

    return this.upload(formData, `profile/EditCertificates?id=${request.id}`);
  }

  getPreviousCoaches(
    request: PreviousCoachRequestModel
  ): Promise<Array<CoachDetailsModel>> {
    return this.httpGet("profile/GetPrevoiusCoaches", request).then(
      (response) => {
        return response.data;
      }
    );
  }
}
