import { BaseModel, LoginModel, LoginResponseModel } from "@/model";
import { BaseService } from './base.service'


export interface IAuthenticationService {
  login(request: LoginModel): Promise<Array<LoginResponseModel>>;
}

export class AuthenticationService
  extends BaseService<LoginModel, LoginResponseModel>
  implements IAuthenticationService
{
  constructor() {
    super("");
  }
  public login(request: LoginModel): Promise<Array<LoginResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<LoginResponseModel>();

      items.push({ username: "LifeNyou", password: "Client" });

      resolve(items);
    });
  }
}
