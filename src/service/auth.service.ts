import { BaseModel, LoginRequestModel, LoginResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface IAuthenticationService {
  login(request: LoginRequestModel): Promise<LoginResponseModel>;
  IsUserFirstTimeLogin(): Promise<any>;
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

  public IsUserFirstTimeLogin(): Promise<any> {
    return this.httpGet("profile/IsUserFirstTimeLogin", null).then(
      (response) => {
        return response.data;
      }
    );
  }
}
