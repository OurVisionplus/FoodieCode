import { SortOrder } from "../../util/SortOrder";

export type CommentsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mealId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
