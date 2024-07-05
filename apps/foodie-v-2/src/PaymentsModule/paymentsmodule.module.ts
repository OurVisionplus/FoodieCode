import { Module } from "@nestjs/common";
import { PaymentsModuleService } from "./paymentsmodule.service";
import { PaymentsModuleController } from "./paymentsmodule.controller";
import { PaymentsModuleResolver } from "./paymentsmodule.resolver";

@Module({
  controllers: [PaymentsModuleController],
  providers: [PaymentsModuleService, PaymentsModuleResolver],
  exports: [PaymentsModuleService],
})
export class PaymentsModuleModule {}
