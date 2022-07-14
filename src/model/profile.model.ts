import { DataRequest } from "./base.model";

export class ClientRequestModel extends DataRequest{
    name: string;
    contact: string;
    email: string;
    queries: string;
}

export class ClientResponseModel {
    name: string;
    contact: string;
    email: string;
    queries: string;
}