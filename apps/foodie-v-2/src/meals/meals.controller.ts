import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MealsService } from "./meals.service";
import { MealsControllerBase } from "./base/meals.controller.base";

@swagger.ApiTags("meals")
@common.Controller("meals")
export class MealsController extends MealsControllerBase {
  constructor(
    protected readonly service: MealsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
