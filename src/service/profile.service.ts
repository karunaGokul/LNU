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
  editCertificates(files: Array<File>, request: CertificateModel): Promise<any>;
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
      console.log(response.data);
      return response.data;
    });
  }

  updateProfile(file: File, request: ClientResponseModel): Promise<any> {
    let formData = new FormData();
    formData.append("image", file);
    formData.append("FirstName", request.FirstName);
    formData.append("LastName", request.LastName);
    formData.append("Name", request.Name);
    formData.append("phoneNumber", request.PhoneNumber);
    formData.append("Email", request.Email);
    formData.append("Queries", request.Queries);
    formData.append("Id", request.Id);

    return this.upload(formData, `profile/EditProfile`);
  }

  updateProfileCoach(file: File, request: CoachResponseModel): Promise<any> {
    let formData = new FormData();
    formData.append("Image", file);
    formData.append("FirstName", request.FirstName);
    formData.append("LastName", request.LastName);
    formData.append("Email", request.Email);
    formData.append("PhoneNumber", request.PhoneNumber);
    formData.append("Experience", request.Experience);
    formData.append("CounselingTypeId", request.CounselingType.Id);
    formData.append("Id", request.Id);

    return this.upload(formData, `profile/EditProfile`);
  }

  editCertificates(
    files: Array<File>,
    request: CertificateModel
  ): Promise<any> {
    let formData = new FormData();

    files.forEach((file) => {
      formData.append("Certificates", file);
      formData.append("CertificateNames", file.name);
    });
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
