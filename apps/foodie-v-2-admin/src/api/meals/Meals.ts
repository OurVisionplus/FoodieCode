import { Comments } from "../comments/Comments";
import { Likes } from "../likes/Likes";
import { Payments } from "../payments/Payments";
import { User } from "../user/User";

export type Meals = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  description: string | null;
  id: string;
  ingredients: string | null;
  likesItems?: Array<Likes>;
  paymentsItems?: Array<Payments>;
  price: number | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
