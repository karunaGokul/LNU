import { BaseService } from "./base.service";

import questionDetails from "@/data/questionnaire.json";

import {
  QuestionnaireResponseModel,
  QuestionnaireStatusModel,
  QuestionRequestModel,
} from "@/model";

export interface IQuestionnaireService {
  getQuestionnaire(): Promise<Array<QuestionnaireResponseModel>>;
  isQuestionsPresent(): Promise<any>;
  updateQuestionnaire(request: QuestionRequestModel, userId: any): Promise<any>;
}

export class QuestionnaireService
  extends BaseService<any, any>
  implements IQuestionnaireService
{
  constructor() {
    super("");
  }

  public getQuestionnaire(): Promise<Array<QuestionnaireResponseModel>> {
    return this.httpGet("profile/GetQuestionnaire", null).then((response) => {
      return response.data;
    });
  }

  public isQuestionsPresent(): Promise<any> {
    return this.httpGet("profile/IsQuestionsPresent", null).then((response) => {
      return response.data;
    });
  }

  public updateQuestionnaire(
    request: QuestionRequestModel,
    userId: any
  ): Promise<any> {
    console.log(request.userId, request);

    return this.httpPost("UpdateQuestionnaire?UserId=" + userId, request).then(
      (response) => {
        return response.data;
      }
    );
  }
}
