import { Meals } from "../meals/Meals";
import { User } from "../user/User";

export type Comments = {
  createdAt: Date;
  id: string;
  meal?: Meals | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
