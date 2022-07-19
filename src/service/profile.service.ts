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
        Name: "LifeNyou",
        Contact: "1234567890",
        Email: "lifenyou@test.com",
        Queries: "welcome",
      });

      resolve(items);
    });
  }
}
