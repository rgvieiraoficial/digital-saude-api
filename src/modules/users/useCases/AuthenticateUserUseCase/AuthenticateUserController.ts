import { FastifyRequest, FastifyReply } from "fastify";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRequestBody {
  email: string,
  password: string,
}

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { email, password, } = request.body as IRequestBody;

    try {
      const data = await this.authenticateUserUseCase.execute({ email, password });

      return reply.status(200).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "E-mail or Password incorrect!" });
    }
  }
}

export { AuthenticateUserController };