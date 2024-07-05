import { MealsWhereUniqueInput } from "../meals/MealsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentsCreateInput = {
  amount?: number | null;
  meal?: MealsWhereUniqueInput | null;
  stripePaymentId?: string | null;
  user?: UserWhereUniqueInput | null;
};
