import { DataRequest } from "./base.model";
import { CounselingModel } from "./registration.model";

export class ClientRequestModel {
  id: string;
}
export class ClientResponseModel {
  Id: string;
  FirstName: string;
  LastName: string;
  Name: string;
  PhoneNumber: string;
  Email: string;
  Queries: string;
  Image: any = null;
}

export class CoachResponseModel {
  Id: string;
  Name: string;
  Experience: string;
  Email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  CounselingType: CounselingModel;
  CertificateNames: Array<string> = [];
  Certificates: Array<File>;
  Image: any = null;
}

export class CertificateModel {
  id: string;
  Id: string;
  Certificates: File;
}
