import { DataRequest } from "./base.model";
import { CounselingModel } from "./registration.model";

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

export class CoachResponseModel {
  Id: string;
  Name: string;
  Experience: string;
  CounselingType: CounselingModel;
  Certificates: string;
  Image: any = null;
}

export class CertificateModel {
  id: string;
  Id: string;
  Certificates: File;
}
