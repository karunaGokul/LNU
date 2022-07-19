import { DataRequest } from "./base.model";

export class PaymentRequestModel extends DataRequest{
    ClientId: string;
}

export class PaymentResponseModel {
    CounsellingType: string;
    Date: string;
    Coach: string;
    Duration: string;
    AmountPaid: string;
}