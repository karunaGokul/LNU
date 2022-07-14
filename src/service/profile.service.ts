import { ClientRequestModel, ClientResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface IProfileService {
  clientProfile(
    request: ClientRequestModel
  ): Promise<Array<ClientResponseModel>>;
}

export class ProfileService
  extends BaseService<ClientRequestModel, ClientResponseModel>
  implements IProfileService
{
  constructor() {
    super("");
  }
  public clientProfile(
    request: ClientRequestModel
  ): Promise<Array<ClientResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<ClientResponseModel>();

      items.push({
        name: "LifeNyou",
        contact: "1234567890",
        email: "lifenyou@test.com",
        queries: "welcome",
      });

      resolve(items);
    });
  }
}
