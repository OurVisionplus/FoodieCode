import { JsonValue } from "type-fest";
import { Buildings } from "../buildings/Buildings";

export type Users = {
  avatar: JsonValue;
  building?: Buildings | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
