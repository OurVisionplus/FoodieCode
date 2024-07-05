import { StringFilter } from "../../util/StringFilter";
import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesWhereInput = {
  id?: StringFilter;
  meal?: MealsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
