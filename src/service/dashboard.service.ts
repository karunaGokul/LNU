import { IBaseService, BaseService } from "./base.service";
import { AdminDeleteCounselling, DashboardResponseModel } from "@/model";
export interface IDashboardService extends IBaseService<any, any> {

  getCounsellingProgram(): Promise<Array<DashboardResponseModel>>;
  getDetailedCounsellingProgramById(
    Id: string
  ): Promise<DashboardResponseModel>;
  DeleteCounsellingType(request: AdminDeleteCounselling): Promise<any>;
  AddCounsellingProgram(
    path: string,
    request: DashboardResponseModel
  ): Promise<DashboardResponseModel>;
}
export class DashboardService
  extends BaseService<any, any>
  implements IDashboardService
{
  constructor() {
    super("");
  }

  public getCounsellingProgram(): Promise<Array<DashboardResponseModel>> {
    return this.httpGet("Admin/GetDetailedCounsellingPrograms", null).then(
      (response) => {
        return response.data;
      }
    );
  }

  public getDetailedCounsellingProgramById(
    Id: string
  ): Promise<DashboardResponseModel> {
    return this.httpGet("Admin/GetCounsellingProgramById?Id=" + Id, null).then(
      (response) => {
        return response.data;
      }
    );
  }

  public AddCounsellingProgram(
    path: string,
    request: DashboardResponseModel
  ): Promise<DashboardResponseModel> {
    let formData = new FormData();
    formData.append("Name", request.Name);
    formData.append("Image", request.Image);
    formData.append("Summary", request.Summary);
    formData.append("Description", request.Description);
    formData.append("Duration", request.Duration);
    formData.append("Cost", request.Cost);

    if (path == "EditCounsellingProgram") formData.append("Id", request.Id);

    return this.upload(formData, `Admin/${path}`);
  }

  public DeleteCounsellingType(request: AdminDeleteCounselling): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(request);
      resolve(request);
    });
  }
}
