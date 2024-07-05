import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsUpdateInput = {
  meal?: MealsWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
