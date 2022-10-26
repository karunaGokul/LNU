import { IBaseService, BaseService } from "./base.service";
import {
  AdminCounselingTypeModel,
  AdminAddCounsellingModel,
  AdminEditCounsellingModel,
  AdminDeleteCounselling,
} from "@/model";
export interface IDashboardService extends IBaseService<any, any> {
  getCounsellingType(): Promise<any>;
  getDetailedCounsellingProgramById(Id: string): Promise<AdminCounselingTypeModel>;
  EditCounsellingType(
    request: AdminEditCounsellingModel,
    productId: string
  ): Promise<any>;
  DeleteCounsellingType(request: AdminDeleteCounselling): Promise<any>;
  AddCounsellingType(request: AdminAddCounsellingModel): Promise<any>;
}
export class DashboardService
  extends BaseService<any, any>
  implements IDashboardService
{
  constructor() {
    super("");
  }

  public getCounsellingType(): Promise<any> {
    return this.httpGet("Admin/GetDetailedCounsellingPrograms", null).then(
      (response) => {
        return response.data;
      }
    );
  }

  public getDetailedCounsellingProgramById(Id: string): Promise<AdminCounselingTypeModel> {
    return this.httpGet("Admin/GetCounsellingProgramById?Id="+Id, null).then(
      (response) => {
        return response.data;
      }
    );
  }

  public AddCounsellingType(request: AdminAddCounsellingModel): Promise<any> {
    let formData = new FormData();
    formData.append("Name", request.Name);
    formData.append("Image", request.Image);
    formData.append("Summary", request.Summary);
    formData.append("Description", request.Description);
    formData.append("Duration", request.Duration);
    formData.append("Cost", request.Cost);
    console.log(request);
    console.log(formData);

    return this.upload(formData, "Admin/AddCounsellingProgram");
  }

  public DeleteCounsellingType(request: AdminDeleteCounselling): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(request);
      resolve(request);
    });
  }
  public EditCounsellingType(request: any, productId: string): Promise<any> {
    request.Id = productId;
    let formData = new FormData();
    formData.append("Id", request.Id);
    formData.append("Name", request.Name);
    formData.append("Image", request.Image);
    formData.append("Summary", request.Summary);
    formData.append("Description", request.Description);
    formData.append("Duration", request.Duration);
    formData.append("Cost", request.Cost);
    return this.upload(formData, "Admin/EditCounsellingProgram");
  }

  
}
