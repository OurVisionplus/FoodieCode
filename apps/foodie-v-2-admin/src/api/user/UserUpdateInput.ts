import { CommentsUpdateManyWithoutUsersInput } from "./CommentsUpdateManyWithoutUsersInput";
import { LikesUpdateManyWithoutUsersInput } from "./LikesUpdateManyWithoutUsersInput";
import { MealsUpdateManyWithoutUsersInput } from "./MealsUpdateManyWithoutUsersInput";
import { PaymentsUpdateManyWithoutUsersInput } from "./PaymentsUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  commentsItems?: CommentsUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likesItems?: LikesUpdateManyWithoutUsersInput;
  mealsItems?: MealsUpdateManyWithoutUsersInput;
  password?: string;
  paymentsItems?: PaymentsUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
