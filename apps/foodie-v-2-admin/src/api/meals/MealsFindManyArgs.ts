import { MealsWhereInput } from "./MealsWhereInput";
import { MealsOrderByInput } from "./MealsOrderByInput";

export type MealsFindManyArgs = {
  where?: MealsWhereInput;
  orderBy?: Array<MealsOrderByInput>;
  skip?: number;
  take?: number;
};
