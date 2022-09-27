import {
  BaseModel,
  ClientRegistrationModel,
  CounselingModel,
  CertificationModel,
  CoachRegistrationModel,
  QuestionnaireModel,
} from "@/model";
import { BaseService } from "./base.service";

export interface IRegistrationService {
  clientRegister(request: ClientRegistrationModel): Promise<any>;
  coachRegister(request: CoachRegistrationModel): Promise<any>;
  getCounselingType(): Promise<Array<CounselingModel>>;
  getCertificationType(): Promise<Array<CertificationModel>>;
  abortRequest(): Promise<any>;
  saveQuestionnaire(request: QuestionnaireModel, id: string): Promise<any>;
}

export class RegistrationService
  extends BaseService<any, any>
  implements IRegistrationService
{
  constructor() {
    super("");
  }

  public clientRegister(request: ClientRegistrationModel): Promise<any> {
    return this.httpPost("Register", request).then((response) => {
      return response.data;
    });
  }
  public saveQuestionnaire(
    request: QuestionnaireModel,
    id: string
  ): Promise<any> {
    return this.httpPost("UpdateQuestionnaire" + id, request).then(
      (response) => {
        return response.data;
      }
    );
  }
  public coachRegister(request: CoachRegistrationModel): Promise<any> {
    return this.httpPost("Register", request).then((response) => {
      console.log(response);
      return response.data;
    });
  }

  public getCounselingType(): Promise<Array<CounselingModel>> {
    return this.httpGet("common/CounselingTypes", null).then((response) => {
      return response.data;
    });
  }

  public getCertificationType(): Promise<Array<CertificationModel>> {
    return this.httpGet("common/Certification", null).then((response) => {
      return response.data;
    });
  }

  public abortRequest(): Promise<any> {
    return this.abortRequest();
  }
}
