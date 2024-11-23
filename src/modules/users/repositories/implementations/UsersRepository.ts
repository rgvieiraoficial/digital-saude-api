import { User, Prisma } from '@prisma/client';

import { IUsersRepository } from '../IUsersRepository';

import { prisma } from '../../../../lib/prisma';

class UsersRepository implements IUsersRepository {

  async create({ name, cpf, email, phone, password, role }: Prisma.UserCreateInput): Promise<User | null> {
    const user = await prisma.user.create({
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

    return user;
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();

    prisma.$disconnect();

    return users;
  }
}

export { UsersRepository };