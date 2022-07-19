import { DataRequest } from "./base.model";

export class ClientRequestModel extends DataRequest{
    Name: string;
    Contact: string;
    Email: string;
    Queries: string;
}

export class ClientResponseModel {
    Name: string;
    Contact: string;
    Email: string;
    Queries: string;
}