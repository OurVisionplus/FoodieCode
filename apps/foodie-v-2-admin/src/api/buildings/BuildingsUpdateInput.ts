import { UsersUpdateManyWithoutBuildingsItemsInput } from "./UsersUpdateManyWithoutBuildingsItemsInput";

export type BuildingsUpdateInput = {
  address?: string | null;
  name?: string | null;
  usersItems?: UsersUpdateManyWithoutBuildingsItemsInput;
};
