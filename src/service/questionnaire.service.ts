import { BaseService } from "./base.service";

import questionDetails from "@/data/questionnaire.json";

import {
  QuestionnaireRequestModel,
  QuestionnaireResponseModel,
  QuestionnaireStatusModel,
  SkippedQuestionsModel,
} from "@/model";

export interface IQuestionnaireService {
  getQuestionnaire(): Promise<Array<QuestionnaireResponseModel>>;
  isQuestionsPresent(): Promise<QuestionnaireStatusModel>;
  updateQuestionnaire(request: QuestionnaireRequestModel, userId: any): Promise<any>;
  skippedQuestions(): Promise<Array<SkippedQuestionsModel>>;
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

  public isQuestionsPresent(): Promise<QuestionnaireStatusModel> {
    return this.httpGet("profile/IsQuestionsPresent", null).then((response) => {
      return response.data;
    });
  }

  public updateQuestionnaire(
    request: QuestionnaireRequestModel,
    userId: any
  ): Promise<any> {
    return this.httpPost("profile/UpdateQuestionnaire?UserId=" + userId, request).then(
      (response) => {
        return response.data;
      }
    );
  }

  public skippedQuestions(): Promise<Array<SkippedQuestionsModel>> {
    return this.httpGet("profile/SkippedQuestions", null).then((response) => {
      return response.data;
    });
  }
}
