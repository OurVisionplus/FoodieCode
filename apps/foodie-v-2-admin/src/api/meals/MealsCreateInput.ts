import { CommentsCreateNestedManyWithoutMealsItemsInput } from "./CommentsCreateNestedManyWithoutMealsItemsInput";
import { LikesCreateNestedManyWithoutMealsItemsInput } from "./LikesCreateNestedManyWithoutMealsItemsInput";
import { PaymentsCreateNestedManyWithoutMealsItemsInput } from "./PaymentsCreateNestedManyWithoutMealsItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealsCreateInput = {
  commentsItems?: CommentsCreateNestedManyWithoutMealsItemsInput;
  description?: string | null;
  ingredients?: string | null;
  likesItems?: LikesCreateNestedManyWithoutMealsItemsInput;
  paymentsItems?: PaymentsCreateNestedManyWithoutMealsItemsInput;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
