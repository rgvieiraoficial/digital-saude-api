import { User, Prisma } from "@prisma/client";

interface IUsersRepository {
  create({ name, cpf, email, phone, password, role }: Prisma.UserCreateInput): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  list(): Promise<User[]>;
}

export { IUsersRepository };