import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesUpdateInput = {
  meal?: MealsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
