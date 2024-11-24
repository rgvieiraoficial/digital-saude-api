import { User, Prisma } from '@prisma/client';

import { IUsersRepository } from '../IUsersRepository';

import { prisma } from '../../../../lib/prisma';

class UsersRepository implements IUsersRepository {

  async create({ name, cpf, email, phone, password, role }: Prisma.UserCreateInput): Promise<User | null> {
    const data = await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        phone,
        password,
        role
      }
    });

    prisma.$disconnect;

    return data;
  }

  async findById(id: string): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: {
        id
      }
    });

    prisma.$disconnect;

    return data;
  }

  async findByEmail(email: string): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: {
        email
      }
    });

    prisma.$disconnect;

    return data;
  }

  async list(): Promise<User[]> {
    const data = await prisma.user.findMany();

    prisma.$disconnect();

    return data;
  }
}

export { UsersRepository };