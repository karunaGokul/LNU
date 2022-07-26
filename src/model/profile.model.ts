import { DataRequest } from "./base.model";

export class ClientRequestModel {
  id: string;
}
export class ClientResponseModel {
  Id: string;
  Name: string;
  PhoneNumber: string;
  Email: string;
  Queries: string;
  Image: any = null;
}
