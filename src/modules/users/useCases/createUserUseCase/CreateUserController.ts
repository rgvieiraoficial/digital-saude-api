import { FastifyRequest, FastifyReply } from "fastify";

import { $Enums } from '@prisma/client';

import { CreateUserUseCase } from "./CreateUserUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRquestBody {
  name: string,
  cpf: number,
  email: string,
  phone: number,
  password: string,
  role: $Enums.UserRole
}

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { name, cpf, email, phone, password, role } = request.body as IRquestBody;

    try {
      const user = await this.createUserUseCase.execute({ name, cpf, email, phone, password, role });

      return reply.status(201).send(jsonFormatter(user));
    } catch (err) {
      return reply.status(400).send({ error: "E-mail already taken!" });
    }
  }
}

export { CreateUserController };