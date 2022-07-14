import { BaseModel, LoginRequestModel, LoginResponseModel } from "@/model";
import { BaseService } from './base.service'


export interface IAuthenticationService {
  login(request: LoginRequestModel): Promise<Array<LoginResponseModel>>;
}

export class AuthenticationService
  extends BaseService<LoginRequestModel, LoginResponseModel>
  implements IAuthenticationService
{
  constructor() {
    super("");
  }
  /* public loginmock(request: LoginRequestModel): Promise<Array<LoginResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<LoginResponseModel>();

      items.push({ username: "LifeNyou", password: "Client" });

      resolve(items);
    });
  } */

  public login(request: LoginRequestModel): Promise<Array<LoginResponseModel>> {
    return this.httpPost("Authenticate", request).then(response => {
      return response.data;
  });
  }
}
