import { DataRequest } from "./base.model";

export class LoginModel extends DataRequest{
    username: string;
    password: string;
}

export class LoginResponseModel {
    username: string;
    password: string;
}