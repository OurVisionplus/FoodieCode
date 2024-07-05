import { Meals } from "../meals/Meals";
import { User } from "../user/User";

export type Likes = {
  createdAt: Date;
  id: string;
  meal?: Meals | null;
  updatedAt: Date;
  user?: User | null;
};
