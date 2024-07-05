import { InputJsonValue } from "../../types";
import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";

export type UsersUpdateInput = {
  avatar?: InputJsonValue;
  building?: BuildingsWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
};
