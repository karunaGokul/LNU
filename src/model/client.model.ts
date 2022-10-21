import { DataRequest } from "./base.model";

export class ClientMockRequestModel extends DataRequest{
    ClientId: string;
}

export class ClientMockResponseModel {
    CounsellingType: string;
    Description: string;
    Cost: string;
    Duration: string;
    Summary: string;
}