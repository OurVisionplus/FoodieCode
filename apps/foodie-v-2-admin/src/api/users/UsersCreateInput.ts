import { InputJsonValue } from "../../types";
import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";

export type UsersCreateInput = {
  avatar?: InputJsonValue;
  building?: BuildingsWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
};
