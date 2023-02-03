import { BaseService } from "./base.service";

import questionDetails from "@/data/first10.json";

import { QuestionnaireStatusModel } from "@/model";

export interface IQuestionnaireService {
  getQuestion(): any;

  questionnaireStatus(): Promise<Array<QuestionnaireStatusModel>>;
}

export class QuestionnaireService implements IQuestionnaireService {
  getQuestion(): any {
    return questionDetails;
  }

  public questionnaireStatus(): Promise<Array<QuestionnaireStatusModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<QuestionnaireStatusModel>();
      items.push({ status: "Pending" });
      items.push({ status: "Completed" });
      items.push({ status: "UnStarted" });
      resolve(items);
    });
  }
}
