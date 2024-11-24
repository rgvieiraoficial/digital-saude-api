import { FastifyRequest, FastifyReply } from "fastify";

import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRequestBody {
  // id
  // id
  // data
}

class CreatePurchaseController {
  constructor(private createPurchaseUseCase: CreatePurchaseUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { } = request.body as IRequestBody;

    try {
      const data = await this.createPurchaseUseCase.execute({});

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreatePurchaseController };