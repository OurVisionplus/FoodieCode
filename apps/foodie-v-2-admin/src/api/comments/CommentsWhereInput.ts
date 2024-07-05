import { StringFilter } from "../../util/StringFilter";
import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsWhereInput = {
  id?: StringFilter;
  meal?: MealsWhereUniqueInput;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
