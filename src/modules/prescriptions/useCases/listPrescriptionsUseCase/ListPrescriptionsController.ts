import { FastifyRequest, FastifyReply } from "fastify";

import { ListPrescriptionsUseCase } from "./ListPrescriptionsUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

class ListPrescriptionsController {
  constructor(private listPrescriptionsUseCase: ListPrescriptionsUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const data = await this.listPrescriptionsUseCase.execute();

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { ListPrescriptionsController };