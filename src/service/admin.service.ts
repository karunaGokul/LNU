import { GetCoachesModel } from "@/model";
import { BaseService } from "./base.service";

export interface IAdminService {
  getCoaches(): Promise<Array<GetCoachesModel>>;
}

export class AdminService
  extends BaseService<any, any>
  implements IAdminService
{
  constructor() {
    super("admin");
  }
  public getCoaches(): Promise<Array<GetCoachesModel>> {
    return this.httpGet("Admin/GetCoaches", null).then(
      (response) => {
        return response.data;
      }
    );
  }
}
