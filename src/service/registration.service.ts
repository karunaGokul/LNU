import { BaseModel, ClientRegistrationModel } from "@/model";
import { BaseService } from './base.service'


export interface IRegistrationService {
  register(request: ClientRegistrationModel): Promise<any>;
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
}
