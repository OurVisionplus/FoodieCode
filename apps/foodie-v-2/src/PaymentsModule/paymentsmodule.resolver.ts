import * as graphql from "@nestjs/graphql";
import { CreatePaymentDto } from "../paymentsModule/CreatePaymentDto";
import { PaymentsModuleService } from "./paymentsmodule.service";

export class PaymentsModuleResolver {
  constructor(protected readonly service: PaymentsModuleService) {}

  @graphql.Mutation(() => CreatePaymentDto)
  async CreatePayment(
    @graphql.Args()
    args: CreatePaymentDto
  ): Promise<CreatePaymentDto> {
    return this.service.CreatePayment(args);
  }
}
