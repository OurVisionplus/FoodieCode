import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BuildingsService } from "./buildings.service";
import { BuildingsControllerBase } from "./base/buildings.controller.base";

@swagger.ApiTags("buildings")
@common.Controller("buildings")
export class BuildingsController extends BuildingsControllerBase {
  constructor(
    protected readonly service: BuildingsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
