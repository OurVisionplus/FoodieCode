import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MealsServiceBase } from "./base/meals.service.base";

@Injectable()
export class MealsService extends MealsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
