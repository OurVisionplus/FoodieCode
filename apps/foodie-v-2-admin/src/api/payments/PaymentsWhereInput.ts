import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentsWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  meal?: MealsWhereUniqueInput;
  stripePaymentId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
