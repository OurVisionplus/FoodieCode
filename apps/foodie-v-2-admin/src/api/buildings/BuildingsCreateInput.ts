import { UsersCreateNestedManyWithoutBuildingsItemsInput } from "./UsersCreateNestedManyWithoutBuildingsItemsInput";

export type BuildingsCreateInput = {
  address?: string | null;
  name?: string | null;
  usersItems?: UsersCreateNestedManyWithoutBuildingsItemsInput;
};
