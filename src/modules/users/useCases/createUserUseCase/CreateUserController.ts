import { FastifyRequest, FastifyReply } from "fastify";

import { $Enums } from '@prisma/client';

import { CreateUserUseCase } from "./CreateUserUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRequestBody {
  name: string,
  cpf: string,
  email: string,
  phone: number,
  password: string,
  role: $Enums.UserRole
}

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { name, cpf, email, phone, password, role } = request.body as IRequestBody;

    try {
      const data = await this.createUserUseCase.execute({ name, cpf, email, phone, password, role });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreateUserController };