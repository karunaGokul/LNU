import { DataRequest } from "./base.model";

export class LoginRequestModel extends DataRequest{
    Email: string;
    Password: string;
    pageType: string;
}

export class LoginResponseModel {
    accessToken: string;
    refreshToken: string;
    role: string;
    username: string;
    id: string;
}