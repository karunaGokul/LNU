import { ServiceHelper } from "./base.service";
import { LoginModel, LoginResponseModel } from "@/model";

export interface IAuthenticationService {
  login(request: LoginModel): Promise<Array<LoginResponseModel>>;
}

export class AuthenticationService
  extends ServiceHelper
  implements IAuthenticationService
{
  public login(request: LoginModel): Promise<Array<LoginResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<LoginResponseModel>();

      items.push({ username: "LifeNyou", password: "Client" });

      resolve(items);
    });
  }
}

