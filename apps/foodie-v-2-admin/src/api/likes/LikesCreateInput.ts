import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesCreateInput = {
  meal?: MealsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
