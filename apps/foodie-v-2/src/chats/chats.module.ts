import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatsModuleBase } from "./base/chats.module.base";
import { ChatsService } from "./chats.service";
import { ChatsController } from "./chats.controller";
import { ChatsResolver } from "./chats.resolver";

@Module({
  imports: [ChatsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatsController],
  providers: [ChatsService, ChatsResolver],
  exports: [ChatsService],
})
export class ChatsModule {}
