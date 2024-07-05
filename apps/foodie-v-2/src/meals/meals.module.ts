import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MealsModuleBase } from "./base/meals.module.base";
import { MealsService } from "./meals.service";
import { MealsController } from "./meals.controller";
import { MealsResolver } from "./meals.resolver";

@Module({
  imports: [MealsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MealsController],
  providers: [MealsService, MealsResolver],
  exports: [MealsService],
})
export class MealsModule {}
