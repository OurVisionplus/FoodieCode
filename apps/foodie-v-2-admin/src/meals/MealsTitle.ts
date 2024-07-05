import { Meals as TMeals } from "../api/meals/Meals";

export const MEALS_TITLE_FIELD = "title";

export const MealsTitle = (record: TMeals): string => {
  return record.title?.toString() || String(record.id);
};
