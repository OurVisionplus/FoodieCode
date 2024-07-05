import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsersListRelationFilter } from "../users/UsersListRelationFilter";

export type BuildingsWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  usersItems?: UsersListRelationFilter;
};
