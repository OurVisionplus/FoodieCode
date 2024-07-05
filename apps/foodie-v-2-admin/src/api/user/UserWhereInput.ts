import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikesListRelationFilter } from "../likes/LikesListRelationFilter";
import { MealsListRelationFilter } from "../meals/MealsListRelationFilter";
import { PaymentsListRelationFilter } from "../payments/PaymentsListRelationFilter";

export type UserWhereInput = {
  commentsItems?: CommentsListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likesItems?: LikesListRelationFilter;
  mealsItems?: MealsListRelationFilter;
  paymentsItems?: PaymentsListRelationFilter;
  username?: StringFilter;
};
