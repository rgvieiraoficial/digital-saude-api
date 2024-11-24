import { Consult_Recipes, Prisma } from "@prisma/client";

interface IConsultsRecipesRepository {
  create({ Consultation, Prescription }: Prisma.Consult_RecipesCreateInput): Promise<Consult_Recipes | null>;
  list(): Promise<Consult_Recipes[]>;
}

export { IConsultsRecipesRepository };