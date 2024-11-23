import { User, Prisma } from "@prisma/client";

interface IUsersRepository {
  create({ name, cpf, email, phone, password, role }: Prisma.UserCreateInput): Promise<User | null>;
  list(): Promise<User[]>;
}

export { IUsersRepository };