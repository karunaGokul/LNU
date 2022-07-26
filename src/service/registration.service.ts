import { BaseModel, ClientRegistrationModel, CounselingModel } from "@/model";
import { BaseService } from './base.service'


export interface IRegistrationService {
  register(request: ClientRegistrationModel): Promise<any>;
  getCounselingType(): Promise<Array<CounselingModel>>;
}

export class RegistrationService
  extends BaseService<any, any>
  implements IRegistrationService
{
  constructor() {
    super("");
  }
  
  public register(request: ClientRegistrationModel): Promise<any> {
    return this.httpPost("Register", request).then(response => {
      return response.data;
  });
  }

  public getCounselingType(): Promise<Array<CounselingModel>> {
    return this.httpGet("common/CounselingTypes", null).then((response) => {
      return response.data;
    });
  }
}
