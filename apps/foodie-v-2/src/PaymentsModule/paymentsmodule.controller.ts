import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentsModuleService } from "./paymentsmodule.service";
import { CreatePaymentDto } from "../paymentsModule/CreatePaymentDto";

@swagger.ApiTags("paymentsModules")
@common.Controller("paymentsModules")
export class PaymentsModuleController {
  constructor(protected readonly service: PaymentsModuleService) {}

  @common.Post("/create-payment")
  @swagger.ApiOkResponse({
    type: CreatePaymentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePayment(
    @common.Body()
    body: CreatePaymentDto
  ): Promise<CreatePaymentDto> {
        return this.service.CreatePayment(body);
      }
}
