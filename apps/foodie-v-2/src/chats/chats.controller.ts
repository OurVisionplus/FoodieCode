import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatsService } from "./chats.service";
import { ChatsControllerBase } from "./base/chats.controller.base";

@swagger.ApiTags("chats")
@common.Controller("chats")
export class ChatsController extends ChatsControllerBase {
  constructor(
    protected readonly service: ChatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
