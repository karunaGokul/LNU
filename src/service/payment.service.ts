import {  PaymentRequestModel, PaymentResponseModel } from "@/model";
import { BaseService } from "./base.service";

export interface IPaymentService {
  payment(
    request: PaymentRequestModel
  ): Promise<Array<PaymentResponseModel>>;
}

export class PaymentService
  extends BaseService<PaymentRequestModel, PaymentResponseModel>
  implements IPaymentService
{
  constructor() {
    super("");
  }
  public payment(
    request: PaymentRequestModel
  ): Promise<Array<PaymentResponseModel>> {
    return new Promise((resolve, reject) => {
      let items = new Array<PaymentResponseModel>();

      items.push({
        CounsellingType: "foo",
        Date: "03.5.22",
        Coach: "abi",
        Duration: "17mins",
        AmountPaid: "700",
      });

      resolve(items);
    });
  }
}
