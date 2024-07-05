import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikesListRelationFilter } from "../likes/LikesListRelationFilter";
import { PaymentsListRelationFilter } from "../payments/PaymentsListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealsWhereInput = {
  commentsItems?: CommentsListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  ingredients?: StringNullableFilter;
  likesItems?: LikesListRelationFilter;
  paymentsItems?: PaymentsListRelationFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
