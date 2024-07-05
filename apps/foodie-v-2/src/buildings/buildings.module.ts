import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BuildingsModuleBase } from "./base/buildings.module.base";
import { BuildingsService } from "./buildings.service";
import { BuildingsController } from "./buildings.controller";
import { BuildingsResolver } from "./buildings.resolver";

@Module({
  imports: [BuildingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [BuildingsController],
  providers: [BuildingsService, BuildingsResolver],
  exports: [BuildingsService],
})
export class BuildingsModule {}
