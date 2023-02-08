import { BaseService } from "./base.service";

import questionDetails from "@/data/questionnaire.json";

import { QuestionnaireResponseModel, QuestionnaireStatusModel } from "@/model";

export interface IQuestionnaireService {
  // getQuestion(): any;

  getQuestionnaire(): Promise<Array<QuestionnaireResponseModel>>;
  isQuestionsPresent(): Promise<any>;
}

export class QuestionnaireService
  extends BaseService<any, any>
  implements IQuestionnaireService
{
  constructor() {
    super("");
  }

  // getQuestion(): any {
  //   return questionDetails;
  // }

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
}
