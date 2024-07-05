import { CommentsCreateNestedManyWithoutUsersInput } from "./CommentsCreateNestedManyWithoutUsersInput";
import { LikesCreateNestedManyWithoutUsersInput } from "./LikesCreateNestedManyWithoutUsersInput";
import { MealsCreateNestedManyWithoutUsersInput } from "./MealsCreateNestedManyWithoutUsersInput";
import { PaymentsCreateNestedManyWithoutUsersInput } from "./PaymentsCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  commentsItems?: CommentsCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likesItems?: LikesCreateNestedManyWithoutUsersInput;
  mealsItems?: MealsCreateNestedManyWithoutUsersInput;
  password: string;
  paymentsItems?: PaymentsCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
