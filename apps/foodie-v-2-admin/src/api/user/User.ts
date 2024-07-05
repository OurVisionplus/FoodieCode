import { Comments } from "../comments/Comments";
import { Likes } from "../likes/Likes";
import { Meals } from "../meals/Meals";
import { Payments } from "../payments/Payments";
import { JsonValue } from "type-fest";

export type User = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likesItems?: Array<Likes>;
  mealsItems?: Array<Meals>;
  paymentsItems?: Array<Payments>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
