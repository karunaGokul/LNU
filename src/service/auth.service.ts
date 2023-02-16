import { BaseModel, LoginRequestModel, LoginResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface IAuthenticationService {
  login(request: LoginRequestModel): Promise<LoginResponseModel>;
}

export class AuthenticationService
  extends BaseService<LoginRequestModel, LoginResponseModel>
  implements IAuthenticationService
{
  constructor() {
    super("");
  }

  public login(request: LoginRequestModel): Promise<LoginResponseModel> {
    return this.httpPost("Authenticate", request).then((response) => {
      return response.data;
    });
  }

}
