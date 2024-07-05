import { Users as TUsers } from "../api/users/Users";

export const USERS_TITLE_FIELD = "name";

export const UsersTitle = (record: TUsers): string => {
  return record.name?.toString() || String(record.id);
};
