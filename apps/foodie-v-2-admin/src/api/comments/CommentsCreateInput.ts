import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsCreateInput = {
  meal?: MealsWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
