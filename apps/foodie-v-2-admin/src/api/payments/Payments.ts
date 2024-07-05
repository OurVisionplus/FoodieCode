import { Meals } from "../meals/Meals";
import { User } from "../user/User";

export type Payments = {
  amount: number | null;
  createdAt: Date;
  id: string;
  meal?: Meals | null;
  stripePaymentId: string | null;
  updatedAt: Date;
  user?: User | null;
};
