import { BaseModel, ClientRegistrationModel, CounsellingModel } from "@/model";
import { BaseService } from './base.service'


export interface IRegistrationService {
  register(request: ClientRegistrationModel): Promise<any>;
  getCounsellingType(): Promise<Array<CounsellingModel>>;
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

  public getCounsellingType(): Promise<Array<CounsellingModel>> {
    return this.httpGet("common/CounsellingTypes", null).then((response) => {
      return response.data;
    });
  }
}
