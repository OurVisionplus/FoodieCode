import { Users } from "../users/Users";

export type Buildings = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  usersItems?: Array<Users>;
};
