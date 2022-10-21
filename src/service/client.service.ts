import {  ClientMockRequestModel, ClientMockResponseModel, } from "@/model";
import { BaseService } from "./base.service";

export interface IClientService {
    clientMockDashboard(
    request: ClientMockRequestModel
  ): Promise<Array<ClientMockResponseModel>>;
}

export class ClientService
  extends BaseService<ClientMockRequestModel, ClientMockResponseModel>
  implements IClientService
{
  constructor() {
    super("");
  }
  public clientMockDashboard(
    request: ClientMockRequestModel
  ): Promise<Array<ClientMockResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<ClientMockResponseModel>();

      items.push({
        CounsellingType: "Behavioural Counselling",
        Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est sit quisquam hic perspiciatis beatae nisi deleniti ipsam iure",
        Cost: "700",
        Duration: "17mins",
        Summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est sit quisquam hic perspiciatis beatae nisi deleniti ipsam iure",
      },
      {
        CounsellingType: "Behavioural Counselling",
        Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est sit quisquam hic perspiciatis beatae nisi deleniti ipsam iure",
        Cost: "700",
        Duration: "17mins",
        Summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est sit quisquam hic perspiciatis beatae nisi deleniti ipsam iure",
      });

      resolve(items);
      console.log(items);
    });
  }
}
