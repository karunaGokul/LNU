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
  getQuestionnaire(request: QuestionnaireModel): Promise<any>;
}

export class RegistrationService
  extends BaseService<any, any>
  implements IRegistrationService
{
  constructor() {
    super("");
  }
  public clientId: string;
  public clientRegister(request: ClientRegistrationModel): Promise<any> {
    return this.httpPost("Register", request).then((response) => {
      this.clientId = response.data;
      return response.data;
    });
  }
  public getQuestionnaire(request: QuestionnaireModel): Promise<any> {
    console.log(this.clientId);
    return this.httpPost("UpdateQuestionnaire" + this.clientId, request).then(
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
