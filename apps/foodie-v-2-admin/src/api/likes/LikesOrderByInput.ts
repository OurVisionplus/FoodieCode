import { SortOrder } from "../../util/SortOrder";

export type LikesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mealId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
