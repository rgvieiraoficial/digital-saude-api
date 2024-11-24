import { FastifyRequest, FastifyReply } from "fastify";


import { CreateConsultationUseCase } from "./CreateConsultationUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRquestBody {

}

class CreateConsultationController {
  constructor(private createConsultationUseCase: CreateConsultationUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { } = request.body as IRquestBody;

    try {
      const data = await this.createConsultationUseCase.execute({  });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreateConsultationController };