import { Chats as TChats } from "../api/chats/Chats";

export const CHATS_TITLE_FIELD = "recipient";

export const ChatsTitle = (record: TChats): string => {
  return record.recipient?.toString() || String(record.id);
};
