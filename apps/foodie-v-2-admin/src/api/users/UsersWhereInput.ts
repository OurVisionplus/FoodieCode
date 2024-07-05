import { JsonFilter } from "../../util/JsonFilter";
import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UsersWhereInput = {
  avatar?: JsonFilter;
  building?: BuildingsWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
