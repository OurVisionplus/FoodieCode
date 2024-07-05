import { ChatsWhereUniqueInput } from "./ChatsWhereUniqueInput";
import { ChatsUpdateInput } from "./ChatsUpdateInput";

export type UpdateChatsArgs = {
  where: ChatsWhereUniqueInput;
  data: ChatsUpdateInput;
};
