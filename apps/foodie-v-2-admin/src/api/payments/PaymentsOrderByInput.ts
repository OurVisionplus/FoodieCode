import { SortOrder } from "../../util/SortOrder";

export type PaymentsOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mealId?: SortOrder;
  stripePaymentId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
