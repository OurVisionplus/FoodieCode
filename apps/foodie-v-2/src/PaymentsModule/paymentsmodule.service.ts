import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "../paymentsModule/CreatePaymentDto";

@Injectable()
export class PaymentsModuleService {
  constructor() {}
  async CreatePayment(args: CreatePaymentDto): Promise<CreatePaymentDto> {
    throw new Error("Not implemented");
  }
}
