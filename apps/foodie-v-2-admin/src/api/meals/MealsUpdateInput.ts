import { CommentsUpdateManyWithoutMealsItemsInput } from "./CommentsUpdateManyWithoutMealsItemsInput";
import { LikesUpdateManyWithoutMealsItemsInput } from "./LikesUpdateManyWithoutMealsItemsInput";
import { PaymentsUpdateManyWithoutMealsItemsInput } from "./PaymentsUpdateManyWithoutMealsItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealsUpdateInput = {
  commentsItems?: CommentsUpdateManyWithoutMealsItemsInput;
  description?: string | null;
  ingredients?: string | null;
  likesItems?: LikesUpdateManyWithoutMealsItemsInput;
  paymentsItems?: PaymentsUpdateManyWithoutMealsItemsInput;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
