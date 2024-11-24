import { FastifyRequest, FastifyReply } from 'fastify';

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRequestBody {
  user_id: string;
}

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { user_id } = request.body as IRequestBody;

    try {
      const data = await this.showUserProfileUseCase.execute({ user_id });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { ShowUserProfileController };