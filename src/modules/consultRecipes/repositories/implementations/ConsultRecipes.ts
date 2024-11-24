import { Consult_Recipes, Prisma } from "@prisma/client";

import { IConsultsRecipesRepository } from "../IConsultsRecipesRepository";

import { prisma } from "../../../../lib/prisma";

class ConsultsRecipesRepository implements IConsultsRecipesRepository {
  async create({  Consultation, Prescription,  }: Prisma.Consult_RecipesCreateInput): Promise<Consult_Recipes | null> {
    const consultRecipes = await prisma.consult_Recipes.create({
      data: {
        Consultation,
        Prescription,
      },
    });

    prisma.$disconnect;

    return consultRecipes;
  }

  async list(): Promise<Consult_Recipes[]> {
    const consults_Recipes = await prisma.consult_Recipes.findMany();

    prisma.$disconnect();

    return consults_Recipes;
  }
}

export { ConsultsRecipesRepository };
