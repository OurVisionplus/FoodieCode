import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatsWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
};
